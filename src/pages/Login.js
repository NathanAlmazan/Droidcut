import React from 'react';
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import { ref, onValue } from "firebase/database";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  const navigate = useNavigate();
  const { loginUser, currentUser, database, setCurrentUsername } = useFirebaseApp();
  const [loginError, setLoginError] = React.useState(false);

  React.useEffect(() => {
    if (currentUser !== null) {
      navigate('/dashboard/app');
    }
  }, [currentUser, navigate])

  function saveUser(uid) {
    onValue(ref(database, 'VerifiedAdmin/Admins/' + uid), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setCurrentUsername(data.username);
      }
    })
  }

  function login(email, password) {
    loginUser(email, password).then(res => {
      saveUser(res.user.uid);
      navigate('/dashboard/app');
    }).catch(err => {
      setLoginError(true);
    })
  }

  return (
    <RootStyle title="Login | Droidcut">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in Droidcut Admin
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your credentials below.</Typography>
          </Stack>

          <LoginForm loginUser={(email, password) => login(email, password)} loginError={loginError} />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
