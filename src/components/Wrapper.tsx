import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

//------------------------------
// Style
//------------------------------
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//------------------------------
// Type
//------------------------------
type WrapperProps = {
  children: React.ReactNode
}

//------------------------------
// Component
//------------------------------
export const Wrapper = (props: WrapperProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {props.children}
    </Box>
  )
}
