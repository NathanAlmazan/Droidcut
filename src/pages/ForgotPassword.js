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
import ResetPassword from '../components/authentication/ResetPassword';

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
  const { forgortPassword, currentUser } = useFirebaseApp();

  React.useEffect(() => {
    if (currentUser !== null) {
      navigate('/dashboard/app');
    }
  }, [currentUser, navigate])

  function resetPassword(email) {
    forgortPassword(email).then(res => {
      navigate('/login');
    }).catch(err => {
        console.log(err.message);
    })
  }

  return (
    <RootStyle title="Reset Password | Droidcut">
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
                Reset Password
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your email below then check your email for instruction to reset your password.</Typography>
          </Stack>

          <ResetPassword resetPassword={(email) => resetPassword(email)} />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
