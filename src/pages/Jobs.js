import React from 'react';
import { headerCase } from 'change-case';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';

//icons
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

//components
import Page from '../components/Page';
import JobsToolbar from '../components/_jobs/JobsToolbar';
import Scrollbar from '../components/Scrollbar';
import SnackbarApp from '../components/Snackbar';

//firebase 
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { ref, onValue, set } from "firebase/database";
import JobsModel from '../models/JobsModel';
import HistoryModel from '../models/HistoryModel';

const applyPagination = (list, page, limit) => {
    return list.slice(page * limit, page * limit + limit);
}

function Jobs() {
    const theme = useTheme();
    const { database, username } = useFirebaseApp();
    const [userJobs, setUserJobs] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [limit, setLimit] = React.useState(5);
    const [selected, setSelected] = React.useState([]);
    const [paginated, setPaginated] = React.useState([]);
    const [snackbarApp, setSnackBarApp] = React.useState({
        openSnackbar: false,
        success: true,
        message: ''
    });

    React.useEffect(() => {
        onValue(ref(database, 'VerifiedUsers/Schedule/Jobs'), (snapshot) => {
            const data = snapshot.val();
            const jobList = new JobsModel(data);
            setUserJobs(state => jobList.getUserJobs(username));
        })
    }, [database, username, snackbarApp])

    React.useEffect(() => {
        const pageUsers = applyPagination(userJobs, page, limit);
        setPaginated(state => pageUsers)
    }, [page, limit, userJobs])

    function completeJob(job) {
        const newHistory = new HistoryModel();
        newHistory.setHistory(job.barber, job.contact_number, job.hair_style, job.schedule, job.full_name, 'Completed', job.uid);
        saveToHistory(newHistory.getHistory());
    }

    function saveToHistory(history) {
        set(ref(database, 'VerifiedUsers/Schedule/History/' + history.unique_id), history).then(response => {
            set(ref(database, 'VerifiedUsers/Schedule/Jobs/' + history.unique_id), null).catch(err => console.error(err));
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: true, message: 'Job was updated successfully.' });
        }).catch(err => {
            setSnackBarApp({ ...snackbarApp, openSnackbar: true, success: false, message: 'Failed to update job.' });
        })
        
    }

    function cancelledJob(job) {
        const newHistory = new HistoryModel();
        newHistory.setHistory(job.barber, job.contact_number, job.hair_style, job.schedule, job.full_name, 'Cancelled', job.uid);
        saveToHistory(newHistory.getHistory());
    }

    function handleSelectOneUser(event, uid) {
        if (!selected.includes(uid)) {
          setSelected((prevSelected) => [
            ...prevSelected,
            uid
          ]);
        } else {
          setSelected((prevSelected) =>
            prevSelected.filter((id) => id !== uid)
          );
        }
    }

    function batchComplete(event) {
        selected.forEach(id => {
            const currJob = userJobs.find(job => job.uid = id);
            completeJob(currJob);
        })
        setSelected([]);
    }

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value));
    }

    return (
        <Page title="Droidcut | Jobs">
           <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    mb: 5
                }}>
                    <Typography variant="h4">Jobs</Typography>
                </Box>

                <Card>
                    <JobsToolbar numSelected={selected.length} completeAll={event =>  batchComplete(event)} />
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox" />
                                        <TableCell>Customer Name</TableCell>
                                        <TableCell align="right">Haircut</TableCell>
                                        <TableCell align="right">Contact Number</TableCell>
                                        <TableCell align="right">Schedule</TableCell>
                                        <TableCell align="right">UID</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {paginated.map((job, index) => {
                                        const isSelected = selected.includes(job.uid);

                                        return (
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                key={job.uid}
                                                selected={isSelected}
                                                >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isSelected}
                                                        value={isSelected}
                                                        onChange={(event) =>
                                                            handleSelectOneUser(event, job.uid)
                                                        }
                                                    />
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {headerCase(job.full_name)}
                                                </TableCell>
                                                <TableCell align="right">{headerCase(job.hair_style)}</TableCell>
                                                <TableCell align="right">{job.contact_number}</TableCell>
                                                <TableCell align="right">{job.schedule}</TableCell>
                                                <TableCell align="right">{job.uid}</TableCell>
                                                <TableCell align="right">
                                                    <Tooltip title="Complete" arrow>
                                                        <IconButton
                                                            sx={{
                                                            '&:hover': { background: theme.palette.primary.light },
                                                            color: theme.palette.primary.main
                                                            }}
                                                            color="inherit"
                                                            size="small"
                                                            onClick={event => completeJob(job)}
                                                        >
                                                            <CheckIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Cancel" arrow>
                                                        <IconButton
                                                            sx={{
                                                            '&:hover': {
                                                                background: theme.palette.error.light
                                                            },
                                                            color: theme.palette.error.main
                                                            }}
                                                            color="inherit"
                                                            onClick={event => cancelledJob(job)}
                                                        >
                                                            <CloseIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                
                                </TableBody>
                            </Table>
                       
                        </TableContainer>
                    </Scrollbar>
                    <Box p={2}>
                        <TablePagination
                            component="div"
                            count={userJobs.length}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleLimitChange}
                            page={page}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[5, 10, 25, 30]}
                        />
                    </Box>
                </Card>
                <SnackbarApp 
                    openSnackbar={snackbarApp.openSnackbar}
                    success={snackbarApp.success} 
                    message={snackbarApp.message} 
                    setOpenSnackbar={value => setSnackBarApp({ ...snackbarApp, openSnackbar: value })} 
                />
           </Container>
        </Page>
    )
}

export default Jobs
