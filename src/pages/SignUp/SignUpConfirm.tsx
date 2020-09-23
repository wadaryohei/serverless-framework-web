import React from 'react';
import { TextField, Button, Container, Box, Typography } from '@material-ui/core';
import { Wrapper } from '../../components/Wrapper';
import { Link } from 'react-router-dom';
import { useConfirm } from '../../hooks/useConfirm';

//------------------------------
// Component
//------------------------------
const SignUpConfirm = () =>{

  //------------------------------
  // Hooks
  //------------------------------
  const confirm = useConfirm()

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Typography component={"h2"} variant={"h5"} align={"center"}>
          <Box fontWeight="fontWeightBold">
            Confirm - メールに届いた認証コードを入力する
          </Box>
        </Typography>
        <Box>
          <Box mt={4}>
            <Typography component={"p"} variant={"body1"}>ユーザーID(メールアドレス)</Typography>
            <Box mt={1}>
              <TextField
                variant={'outlined'}
                value={confirm.getConfirmParams().username}
                fullWidth
                disabled
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Typography component={"p"} variant={"body1"}>認証コード</Typography>
            <Box mt={1}>
              <TextField
                type="password"
                value={confirm.getConfirmParams().code}
                variant={'outlined'}
                fullWidth
                disabled
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => confirm.confirm(confirm.username, confirm.code)}
              fullWidth
            >
              ユーザー登録を完了する
            </Button>
          </Box>

          <Box mt={2} textAlign={"center"}>
            <Link to={''} onClick={(e) => confirm.resendConfirm(e)}>認証コードを再発行する</Link>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default SignUpConfirm;
