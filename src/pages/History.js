import React from 'react';
import { headerCase, sentenceCase } from 'change-case';
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
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

//components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import Label from '../components/Label';

//firebase 
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { ref, onValue } from "firebase/database";
import HistoryModel from '../models/HistoryModel';

const applyPagination = (list, page, limit) => {
    return list.slice(page * limit, page * limit + limit);
}

const RootStyle = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3)
  }));

function Jobs() {
    const { database, username } = useFirebaseApp();
    const [userHistory, setUserHistory] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [limit, setLimit] = React.useState(5);
    const [paginated, setPaginated] = React.useState([]);

    React.useEffect(() => {
        onValue(ref(database, 'VerifiedUsers/Schedule/History'), (snapshot) => {
            const data = snapshot.val();
            const historyList = new HistoryModel();
            historyList.convertObjectToArray(data);

            setUserHistory(state => historyList.getUserHistory(username));
        })
    }, [database, username])

    React.useEffect(() => {
        const pageUsers = applyPagination(userHistory, page, limit);
        setPaginated(state => pageUsers)
    }, [page, limit, userHistory])

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value));
    }

    return (
        <Page title="Droidcut | History">
           <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    mb: 5
                }}>
                    <Typography variant="h4">History</Typography>
                </Box>

                <Card>
                    <RootStyle>
                        <Typography component="div" variant="subtitle1">
                            History List
                        </Typography>
                    </RootStyle>
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Customer Name</TableCell>
                                        <TableCell align="right">Haircut</TableCell>
                                        <TableCell align="right">Contact Number</TableCell>
                                        <TableCell align="right">Schedule</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {paginated.map((history, index) => {

                                        return (
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                key={index}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {headerCase(history.scheduled_by)}
                                                </TableCell>
                                                <TableCell align="right">{headerCase(history.haircut)}</TableCell>
                                                <TableCell align="right">{history.contact_number}</TableCell>
                                                <TableCell align="right">{history.schedule_datetime}</TableCell>
                                                <TableCell align="right">
                                                    <Label
                                                        variant="ghost"
                                                        color={(history.status === 'Cancelled' && 'error') || 'success'}
                                                        >
                                                        {sentenceCase(history.status)}
                                                    </Label>
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
                            count={userHistory.length}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleLimitChange}
                            page={page}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[5, 10, 25, 30]}
                        />
                    </Box>
                </Card>
           </Container>
        </Page>
    )
}

export default Jobs
