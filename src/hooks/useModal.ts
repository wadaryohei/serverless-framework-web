import { useDispatch } from 'react-redux';
import { UIActions } from '../stores/ui/actions';

//------------------------------
// Type
//------------------------------
export type useModalType = {
  onToggleModal: () => void
}

//------------------------------
// Hooks
//------------------------------
export const useModal = (): useModalType => {
  const dispatch = useDispatch()

  /**
   * モーダルを開閉するハンドラー
   */
  const onToggleModal = (): void => {
    dispatch(UIActions.uiModalToggle())
  }

  return { onToggleModal }
}
