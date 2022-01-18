import { useState, useEffect } from 'react';
// material
import { Box, Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales,
  AppJobCard
} from '../components/_dashboard/app';
import { useNavigate } from 'react-router-dom';

//firebase 
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { ref, onValue } from "firebase/database";
import HaircutModel from '../models/HaircutModel';

//icons
import AddIcon from '@mui/icons-material/Add';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const { database } = useFirebaseApp();
  const navigate = useNavigate();
  const [haircutList, setHairCutList] = useState([]);

  useEffect(() => {
    const hairCutsListRef = ref(database, 'Haircuts');
    onValue(hairCutsListRef, (snapshot) => {
      const data = snapshot.val();
      const hairList = new HaircutModel(null, null);
      setHairCutList(state => hairList.databaseObjectToArray(data));
    })
  }, [database])

  return (
    <Page title="Droidcut | Home">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>
        </Grid>

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 8
        }}>
          <Typography variant="h4">Haircuts</Typography>
          <Button variant="contained" startIcon={<AddIcon/>} onClick={event => navigate('/dashboard/haircut/create')}>Add Haircut</Button>
        </Box>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {haircutList.map((haircut, index) =>
            <Grid item xs={12} md={4} key={haircut.uid}>
              <AppJobCard data={haircut} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Page>
  );
}
