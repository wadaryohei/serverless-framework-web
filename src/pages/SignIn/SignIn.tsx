import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@material-ui/core';
import { Wrapper } from '../../components/Wrapper';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

//------------------------------
// Component
//------------------------------
const SignIn = () =>{

  //------------------------------
  // Hooks
  //------------------------------
  const auth = useAuth()
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Typography component={"h2"} variant={"h5"} align={"center"}>
          <Box fontWeight="fontWeightBold">
            SignIn - ログインする
          </Box>
        </Typography>
        <Box>
          <Box mt={4}>
            <Typography component={"p"} variant={"body1"}>USER NAME</Typography>
            <Box mt={1}>
              <TextField
                variant={'outlined'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Typography component={"p"} variant={"body1"}>PASSWORD</Typography>
            <Box mt={1}>
              <TextField
                type="password"
                value={password}
                variant={'outlined'}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary" onClick={() => auth.signIn(name, password)}
              fullWidth
            >
              ログイン
            </Button>
          </Box>

          <Box mt={2} textAlign={"center"}>
            <Link to={'/signup'}>アカウントをお持ちで無い場合はコチラ</Link>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default SignIn;
