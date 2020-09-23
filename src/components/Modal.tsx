import React from 'react';
import { Modal as MuiModal, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from '../hooks/useSelector';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10000,
    opacity: .8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: 'none'
  },
  modal: {
    position: 'relative',
    zIndex: 100,
    width: '320px',
    height: '200px',
    backgroundColor: '#fff',
  },
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

//------------------------------
// Props
//------------------------------
type ModalProps = {
  callback: () => void
}

//------------------------------
// Component
//------------------------------
export const Modal = (props: ModalProps) => {

  const classes = useStyles()
  const selector = useSelector()

  return (
    <Container maxWidth={"sm"}>
      <MuiModal
        className={classes.root}
        open={selector.uiState().open}
        onClose={props.callback}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <div className={classes.body}>投稿されました</div>
        </div>
      </MuiModal>
    </Container>
  )
}
