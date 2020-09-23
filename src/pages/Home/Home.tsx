import React, { useEffect, useRef } from 'react';
import { Box, TextField, Button, Container, Typography, Divider } from '@material-ui/core';
import { Modal } from '../../components/Modal';
import { useAuth } from '../../hooks/useAuth';
import { usePosts } from '../../hooks/usePosts';
import { useModal } from '../../hooks/useModal';
import { useModalEpic } from '../../hooks/epic/useModalEpic';
import { useSelector } from '../../hooks/useSelector';
import { useAPI } from '../../hooks/useAPI';

//------------------------------
// Component
//------------------------------
const Home = () => {

  //------------------------------
  // Hooks
  //------------------------------
  const mount = useRef<boolean>(true)
  const posts = usePosts()
  const auth = useAuth()
  const modal = useModal()
  const selector = useSelector()
  const api = useAPI()
  const userSelector = selector.userState()
  const epic = useModalEpic(posts.onCreate, modal.onToggleModal)

  //------------------------------
  // LifeCycle
  //------------------------------
  useEffect(() => {

    // API Gatewayを認証有りで叩いてみる
    const init = async () => {
      await api.fetchHello().then((result) => {
        console.log(result)
      })
    }
    init()

    posts.initFetch(mount)
    return () => {
      mount.current = false
    }
    // eslint-disable-next-line
  },[])

  return (
    <Box my={8}>
      <Modal callback={modal.onToggleModal} />
      <Container>
        <Typography component={"h2"} variant={"h5"}>
          <Box fontWeight="fontWeightBold">
            {userSelector.username}でログイン中です
          </Box>
          <Box py={4}><Divider /></Box>
        </Typography>
        <ul>{
          posts.getListPost()?.listPost?.map((post, index) => {
            return (
              <Box key={index} my={4}>
                <li>
                  <Box mb={2}>
                    <Box mb={1} fontWeight="fontWeightBold">
                      <TextField
                        variant={'outlined'}
                        name={`post-${post?.postId}`}
                        value={posts.getUpdatePost()[`post-${post?.postId}`] || post.content}
                        onChange={posts.setUpdatePost}
                        fullWidth
                      />
                    </Box>
                    <Typography component={"p"} variant={"body2"} color="textSecondary">postId : {post?.postId}</Typography>
                  </Box>
                  <Box display="flex" mb={2}>
                    <Box mr={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => posts.onUpdate(`${post?.postId}`)}
                      >
                        更新する
                      </Button>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => posts.onDelete(post?.postId)}
                    >
                      投稿を削除する
                    </Button>
                  </Box>

                  <Box pt={8} pb={4}><Divider /></Box>
                </li>
              </Box>
            )
          })
        }
        </ul>
        <h2>Post - 投稿する</h2>
        <Box mt={4}>
          <TextField
            variant={'outlined'}
            value={posts.getPost()}
            onChange={(e) => posts.setPost(e.target.value)}
            fullWidth
          />
        </Box>

        <Box my={4}>
          <Box display="flex">
            <Box mr={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => epic.onModalEpic()}
              >
                投稿する
              </Button>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => auth.signOut()}
              >
                ログアウトする
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
