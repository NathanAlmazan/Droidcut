import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import JobsModel from '../models/JobsModel';
import HistoryModel from '../models/HistoryModel';

//firebase apps
const firebaseConfig = {
  apiKey: "AIzaSyA3tn1IJ5H0C0JT1wefDJvjUWfXoTgwc28",
  authDomain: "database-ed41f.firebaseapp.com",
  databaseURL: "https://database-ed41f-default-rtdb.firebaseio.com",
  projectId: "database-ed41f",
  storageBucket: "database-ed41f.appspot.com",
  messagingSenderId: "612551253262",
  appId: "1:612551253262:web:5b886ae6d371d8ce2b4b5f",
  measurementId: "G-C4NN8JYG5B"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);


//firebase contexts
const FirebaseContext = createContext({});

export function useFirebaseApp() {
    return useContext(FirebaseContext);
}

function FirebaseProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUsername] = useState(null);
    const [notifications, setNotifocations] = useState({
        jobs: 0,
        cancelled: 0,
        customers: 0,
        completed: 0

    })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        setUsername(!window.localStorage.getItem("username") ? null : window.localStorage.getItem("username"));

        return unsubscribe;
    }, []);

    useEffect(() => {
        onValue(ref(database, 'VerifiedUsers/Schedule/Jobs'), (snapshot) => {
            const data = snapshot.val();
            const jobList = new JobsModel(data);
            setNotifocations(state => ({ ...state, jobs: jobList.getUserJobs(username).length}))
        })

        onValue(ref(database, 'VerifiedUsers/Schedule/History'), (snapshot) => {
            const data = snapshot.val();
            const historyList = new HistoryModel();
            historyList.convertObjectToArray(data);
            const cancelledJob = historyList.getUserHistory(username).filter(history => history.status === 'Cancelled');
            const completedJobs = historyList.getUserHistory(username).filter(history => history.status === 'Completed');

            setNotifocations(state => ({ ...state, cancelled: cancelledJob.length, barbers: completedJobs.length }))
        })

        onValue(ref(database, 'VerifiedUsers/User'), (snapshot) => {
            const users = snapshot.val();
            let userList = [];
            Object.keys(users).forEach(obj => {
                const currUser = users[obj];
                currUser.uid = obj;
                userList.push(currUser);
            });

            setNotifocations(state => ({ ...state, customers: userList.length}))
        })

        onValue(ref(database, 'VerifiedUsers/AvailableSchedule'), (snapshot) => {
            const users = snapshot.val();
            let barberList = [];
            Object.keys(users).forEach(obj => {
                const currUser = users[obj];
                currUser.uid = obj;
                barberList.push(currUser);
            });

            const available = barberList.filter(user => new Date(user.schedule_datetime).getDate() === new Date().getDate());

            setNotifocations(state => ({ ...state, available: available.length}));
        })

    }, [currentUser, username])

    function loginUser(email, password) {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    function logoutUser() {
        return signOut(firebaseAuth);
    }

    function signupUser(email, password) {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    function forgortPassword(email) {
        return sendPasswordResetEmail(firebaseAuth, email);
    }

    function setCurrentUsername(username) {
        setUsername(username);
        window.localStorage.setItem("username", username);
    }

    const firebaseValue = {
        currentUser,
        username,
        loginUser,
        logoutUser,
        signupUser,
        forgortPassword,
        setCurrentUsername,
        database,
        notifications
    }

    return (
        <FirebaseContext.Provider value={firebaseValue}>
            {!loading && children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider
