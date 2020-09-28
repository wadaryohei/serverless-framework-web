import { useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { queries, mutations } from '../services/graphql';
import * as graphAPI from '../services/graphql/API'
import { useSelector } from './useSelector';

//------------------------------
// Type
//------------------------------
export type usePostsType = {
  //------------------------------
  // Handler
  //------------------------------
  onCreate: () => Promise<void>
  onUpdate: (postId: string, userId: string) => Promise<void>
  onDelete: (postId: string | undefined) => Promise<void>

  //------------------------------
  // Getter
  //------------------------------
  getListPost: () => graphAPI.ListPostQuery | undefined
  getPost: () => string
  getUpdatePost: () => {[key: string]: string}

  //------------------------------
  // Setter
  //------------------------------
  setLists: (lists: graphAPI.ListPostQuery) => void
  setPost: (str: string) => void
  setUpdatePost: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void

  //------------------------------
  // methods
  //------------------------------
  isDelete: (username: string) => boolean

  //------------------------------
  // Initilize
  //------------------------------
  initFetch: (mount: React.MutableRefObject<boolean>) => Promise<void>
}

//------------------------------
// Hooks
//------------------------------
export const usePosts = (): usePostsType => {

  const userSelector = useSelector()
  const [_lists, _setLists] = useState<graphAPI.ListPostQuery | undefined>()
  const [_post, _setPost] = useState<string>('')
  const [_updatePost, _setUpdatePost] = useState<{[key: string]: string}>({})

  //------------------------------
  // Handler
  //------------------------------
  /**
   * 投稿する処理
   */
  const onCreate = async(): Promise<void> => {
    if (_post.length === 0) {
      alert('1文字以上入力してください')
      return
    }
    await API.graphql(graphqlOperation(mutations.createPost, { input: { username: `${userSelector.userState().username}`, content: _post }}))
    _setPost('')
  }

  /**
   * 投稿を更新する処理
   */
  const onUpdate = async(postId: string, username: string): Promise<void> => {
    if (_updatePost[`post-${postId}`]?.length === 0) {
      alert('1文字以上入力してください')
      return
    }
    await API.graphql(graphqlOperation(mutations.updatePost, { input: { content: _updatePost[`post-${postId}`], postId: postId, username: username }}))
    _setUpdatePost({})
    alert('投稿を更新しました')
    window.location.reload()
  }

  /**
   * 投稿を削除する処理
   */
  const onDelete = async(postId: string | undefined): Promise<void> => {
    await API.graphql(graphqlOperation(mutations.deletePost, { input: { postId: postId } }))
    window.location.reload()
  }

  //------------------------------
  // Getter
  //------------------------------
  /**
   * postのstateを返す
   */
  const getListPost = (): graphAPI.ListPostQuery | undefined => {
    if(_lists !== undefined) {
      return _lists
    }
    return
  }

  /**
   * 新規投稿のpostのstateを返す
   */
  const getPost = (): string => {
    return _post
  }

  /**
   * リストのpostのstateを返す
   */
  const getUpdatePost = (): {[key: string]: string} => {
    return _updatePost
  }

  //------------------------------
  // Setter
  //------------------------------
  /**
   * 投稿をセットする処理
   */
  const setLists = (lists: graphAPI.ListPostQuery | undefined): void => {
    if (!undefined) {
      _setLists(lists)
    }
  }

  /**
   * 入力した文字列をセットする処理
   */
  const setPost = (str: string): void => {
    _setPost(str)
  }

  /**
   * 各リスト投稿を編集時に入力した文字列をセットする処理
   */
  const setUpdatePost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value
    // フォーム側のname属性をキーに入力された値をvalueにする
    _setUpdatePost({
      [e.target.name]: value
    })
  }

  //------------------------------
  // methods
  //------------------------------
  /**
   * 現在のログイン中のユーザーとポストしたユーザーが違う場合
   */
  const isDelete = (username: string): boolean => {
    if (username !== userSelector.userState().username) {
      return false
    }
    return true
  }

  //------------------------------
  // Initilize
  //------------------------------
  /**
   * 投稿を初期化時に読み込む処理
   */
  const initFetch = async (mount: React.MutableRefObject<boolean>): Promise<void> => {
    const posts = await API.graphql(graphqlOperation(queries.listPost)) as {
      data: graphAPI.ListPostQuery
    }
    if (mount.current) {
      setLists(posts.data)

      // フォーム側のname属性とキーを一致させておいてuser.nameを初期値に入れる
      posts.data.listPost.forEach((post) => {
        _setUpdatePost({
          [`post-${post.postId}`]: post.content
        })
      })
    }
  }

  return {
    setLists,
    setPost,
    setUpdatePost,
    getPost,
    getUpdatePost,
    getListPost,
    onCreate,
    onUpdate,
    onDelete,
    isDelete,
    initFetch
  }
}