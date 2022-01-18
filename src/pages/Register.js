import React from 'react';
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';

//firebase
import { ref, set } from "firebase/database";
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

export default function Register() {
  const navigate = useNavigate();
  const { signupUser, database, currentUser, setCurrentUsername } = useFirebaseApp();
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (currentUser !== null) {
      navigate('/dashboard/app');
    }
  }, [currentUser, navigate])

  function saveAsAdmin(uid, username, password) {
    set(ref(database, 'VerifiedAdmin/Admins/' + uid), {
      username: username,
      password: password
    }).then(response => {
      setError(null);
      setCurrentUsername(username);
      navigate('/login');
    }).catch(error => {
      setError("Failed to save account.")
    })
  }

  function signup(username, email, password) {
    signupUser(email, password).then(response => {
      setError(null);
      saveAsAdmin(response.user.uid, username, password);
    }).catch(error => {
      if (password.length < 8) {
        setError("Weak password. Please try again.");
      } else {
        setError("User already exists.");
      }
    });
  } 


  return (
    <RootStyle title="Register | Droidcut">
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Droidcut!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Signup as a new Barber of Droidcut.
            </Typography>
          </Box>

          <RegisterForm signupUser={(username, email, password) => signup(username, email, password)} error={error} />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
