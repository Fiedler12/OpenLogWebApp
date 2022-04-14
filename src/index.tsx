/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import {  getFirestore, collection, getDocs, addDoc, deleteDoc, doc }from 'firebase/firestore'
import { LegendToggleSharp } from '@mui/icons-material';


ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

