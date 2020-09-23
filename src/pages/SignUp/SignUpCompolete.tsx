import React from 'react';
import { Box, Container, Button, Typography } from '@material-ui/core';
import { Wrapper } from '../../components/Wrapper';
import { useHistory } from 'react-router';

//------------------------------
// Component
//------------------------------
const SignUpCompolete = () =>{

  //------------------------------
  // Hooks
  //------------------------------
  const history = useHistory()

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Typography component={"h2"} variant={"h5"} align={"center"}>
          <Box fontWeight="fontWeightBold">
            メールに認証コードを送信しました。
          </Box>
        </Typography>
        <Box>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/signin')}
            fullWidth
          >
            TOPに戻る
          </Button>
        </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default SignUpCompolete