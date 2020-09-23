import React, { useState } from 'react';
import { Box, Container, Button, TextField, Typography } from '@material-ui/core';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper } from '../../components/Wrapper';

//------------------------------
// Component
//------------------------------
const SignUp = () =>{

  //------------------------------
  // Hooks
  //------------------------------
  const auth = useAuth()
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Typography component={"h2"} variant={"h5"} align={"center"}>
          <Box fontWeight="fontWeightBold">
            SignUp - 新規登録する
          </Box>
        </Typography>
        <Box>
          <Box mt={4}>
            <Typography component={"p"} variant={"body1"}>USER NAME</Typography>
            <Box mt={1}>
              <TextField
                type="text"
                variant={'outlined'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>

          <Box mt={4}>
            <Typography component={"p"} variant={"body1"}>PASSWORD</Typography>
              <Box mt={1}>
                <TextField
                  type="password"
                  variant={'outlined'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Box>
          </Box>

          <Box mt={4}>
          <Typography component={"p"} variant={"body1"}>E-MAIL</Typography>
            <Box mt={1}>
              <TextField
                type="email"
                variant={'outlined'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => auth.signUp(username, password, email)}
              fullWidth
            >
              登録する
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default SignUp