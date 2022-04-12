/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import { 
  getFirestore, collection, getDocs, addDoc, deleteDoc, doc
}from 'firebase/firestore'

import { LegendToggleSharp } from '@mui/icons-material';



ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// init irebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'Logs')

//get collection data
getDocs(colRef)
  /*.then((snapshot) => {
    let Logs = []
    snapshot.docs.forEach((doc) => {
    Logs.push({ ...doc.data(), id: doc.id})
    })
    console.log (Logs)
  })*/
  .catch(err => {
    console.log(err.message)
  })

  //add ducuments
  const addLogForm = document.querySelector('.add')
  addLogForm?.addEventListener('submit', (e) => {
    e.preventDefault()

  /*addDoc(colRef, {
    Category: addLogForm.category.valueOf,
    Unit: addLogForm.unit.valueOf,
    })
    .then(() => {
      addLogForm.reset()
    })*/
   })

  //delete ducuments 
  const deleteLogForm = document.querySelector('.delete')
  deleteLogForm?.addEventListener('submit', (e) => {
    e.preventDefault()
   /*const docRef =doc(db, 'Logs', deleteLogForm.id.valueOf)

   deleteDoc(docRef)
    .then(() => {
      deleteLogForm.reset()
    })*/
   })
