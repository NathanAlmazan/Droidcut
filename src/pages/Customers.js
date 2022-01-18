import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import CustomerCard from '../components/_customers/CustomerCard';

//firebase
import { useFirebaseApp } from '../contexts/FirebaseProvider';
import { ref, onValue } from "firebase/database";




function Customers() {
    const [customers, setCustomers] = useState([]);
    const { database } = useFirebaseApp();

    useEffect(() => {
        onValue(ref(database, 'VerifiedUsers/User'), (snapshot) => {
            const users = snapshot.val();
            let userList = [];
            Object.keys(users).forEach(obj => {
                const currUser = users[obj];
                currUser.uid = obj;
                userList.push(currUser);
            });

            onValue(ref(database, 'VerifiedUsers/Feedbacks'), (snapshot) => {
                const feedbacks = snapshot.val();
                let feedbackList = [];
                Object.keys(feedbacks).forEach(obj => {
                    const currFeedback = feedbacks[obj];
                    currFeedback.uid = obj;
                    feedbackList.push(currFeedback);
                });

                console.log(feedbackList);

                let customerList = [];

                userList.forEach(user => {
                    const userFeedbacks = feedbackList.filter(feedback => feedback.email.split('@')[0].normalize() === user.email.split('@')[0].normalize());
                    user.feedbacks = userFeedbacks;
                    customerList.push(user);
                })

                setCustomers(state => customerList);
            })
        })
    }, [database])

    console.log(customers);

    return (
        <Page title="Droidcut | Customers">
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                        <Typography variant="h4">Customers</Typography>
                    </Box>

                    <Grid container spacing={3} sx={{ mt: 3 }}>
                       {customers.map(customer => (
                        <Grid item xs={12} md={6} key={customer.email}>
                            <CustomerCard customer={customer} />
                        </Grid>
                       ))} 
                    </Grid>
                </Container>
        </Page>
    )
}

export default Customers
