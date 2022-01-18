import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, IconButton, Stack, TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Page from '../components/Page';
import ScheduleCard from '../components/_schedule/ScheduleCard';
import SnackbarApp from '../components/Snackbar';

//icons
import AddIcon from '@mui/icons-material/Add';

//firebase
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { ref, onValue, set } from "firebase/database";
import ScheduleModel from '../models/ScheduleModel';

function Schedule() {
    const { database, username } = useFirebaseApp();
    const [date, setDate] = useState(new Date());
    const [schedules, setSchedules] = useState([]);
    const [snackbarApp, setSnackBarApp] = useState({
        openSnackbar: false,
        success: true,
        message: ''
    });

    const handleDateChange = (newValue) => {
        setDate(newValue);
    };

    useEffect(() => {
        onValue(ref(database, 'VerifiedUsers/AvailableSchedule'), (snapshot) => {
            const data = snapshot.val();
            const scheduleModel = new ScheduleModel(null, null, null);
            scheduleModel.convertObjectToArray(data);

            setSchedules(state => scheduleModel.getUserScheduleList(username).sort((a, b) => new Date(a.schedule_datetime).getTime() - new Date(b.schedule_datetime).getTime()));
        })
    }, [database, username, snackbarApp])

    function editSchedule(uid, value) {
        const updatedSchedule = schedules.find(schedule => schedule.uid === uid);
        if (updatedSchedule !== null) {
            updatedSchedule.schedule_datetime = value;
            set(ref(database, 'VerifiedUsers/AvailableSchedule/' + uid), updatedSchedule).then(result => {
                setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: true, message: 'Schedule was updated successfully.' });
            }).catch(error => {
                setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: false, message: 'Failed to update schedule.' });
            });
        } else {
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: false, message: 'Schedule does not exist.' });
        }
    }

    function addSchedule() {
        const newUid = Math.random().toString(36).substring(2,12) + Math.random().toString(36).substring(2,12);
        const newSchedule = new ScheduleModel(newUid, username, date);
        set(ref(database, 'VerifiedUsers/AvailableSchedule/' + newUid), newSchedule.getSchedule()).then(result => {
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: true, message: 'Schedule was added successfully.' });
        }).catch(error => {
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: false, message: 'Failed to add schedule.' });
        })
    }

    function deleteSchedule(uid) {
        set(ref(database, 'VerifiedUsers/AvailableSchedule/' + uid), null).then(result => {
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success:false, message: 'Schedule was deleted successfully.' });
        }).catch(error => {
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: false, message: 'Failed to delete schedule.' });
        })
    }

    return (
        <Page title="Droidcut | Schedule">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Container>
                    <Grid container spacing={3} justifyContent="space-between">
                        <Grid item sm={12} md={5}>
                            <Typography variant="h4">Schedules</Typography>
                        </Grid>
                        <Grid item sm={12} md={5}>
                            <Stack direction="row" justifyContent="end" sx={{ minWidth: 200 }} spacing={1}>
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={date}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <IconButton onClick={event => addSchedule()}>
                                    <AddIcon/>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} sx={{ mt: 3 }}>
                        {schedules.map((schedule, index) => 
                            <Grid item xs={12} md={4} key={schedule.uid}>
                                <ScheduleCard data={schedule} 
                                    editSchedule={(uid, value) => editSchedule(uid, value)} 
                                    deleteSchedule={(uid) => deleteSchedule(uid)}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </LocalizationProvider>
            <SnackbarApp 
                openSnackbar={snackbarApp.openSnackbar}
                success={snackbarApp.success} 
                message={snackbarApp.message} 
                setOpenSnackbar={value => setSnackBarApp({ ...snackbarApp, openSnackbar: value })} 
            />
        </Page>
    )
}

export default Schedule
