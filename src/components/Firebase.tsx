import { DocumentScannerOutlined } from '@mui/icons-material';
import { getDefaultNormalizer } from '@testing-library/react';
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBV9EJWJo0k_TjFNr1Ez0wlY3Carpwrg0k",
    authDomain: "openlog-19f8b.firebaseapp.com",
    databaseURL: "https://openlog-19f8b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "openlog-19f8b",
    storageBucket: "openlog-19f8b.appspot.com",
    messagingSenderId: "403449378742",
    appId: "1:403449378742:web:d747d051ba10d156f93317",
    measurementId: "G-G8YNX3Q6H7"
  };

const app = initializeApp(firebaseConfig); 

const database = getDatabase(app); 

export {database}; 
