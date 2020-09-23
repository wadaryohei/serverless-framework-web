import { useSelector } from "../useSelector"

//------------------------------
// Type
//------------------------------
export type modalEpicType = {
  onModalEpic: () => void
}

//------------------------------
// Epic
//------------------------------
export const useModalEpic = (
  onPost: () => Promise<void>,
  onModal: () => void
  ): modalEpicType => {

  // Storeを取得する
  const selector = useSelector()

  /**
   * 投稿したらモーダルがオープンするEpic
   */
  const onModalEpic = async (): Promise<void> => {
    try {
      await asyncPost()
      window.location.reload()
      console.log(selector.userState().isAuth)
      if (selector.userState().isAuth) {
        await asyncModal().then(() => {
          setTimeout(async () => {
            window.location.reload()
          }, 1200)
        })
      }
    } catch(e) {
      console.log(e)
      return
    }
  }

  //------------------------------
  // Promiseに変換
  //------------------------------
  /**
   * PostをPromise
   */
  const asyncPost = (): Promise<void> => {
    return new Promise((resolve) => {
      resolve(onPost())
    })
  }

  /**
   * modalをPromise
   */
  const asyncModal = (): Promise<void> => {
    return new Promise((resolve) => {
      resolve(onModal())
    })
  }

  return { onModalEpic }
}
