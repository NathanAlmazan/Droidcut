import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { useFirebaseApp } from '../../../contexts/FirebaseProvider';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppWeeklySales() {
  const { notifications } = useFirebaseApp();

  return (
    <RootStyle>
      <IconWrapperStyle>
        <PeopleAltIcon />
      </IconWrapperStyle>
      <Typography variant="h3">{notifications.customers}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Customers
      </Typography>
    </RootStyle>
  );
}