
import { collection, Firestore, getDocs } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { database } from '../components/Firebase';
import {ref, set, push} from "firebase/database"; 
import  userId from "./LoginPage"
import { AddNewLogSetup } from '../components/AddNewLogSetup'
import axios from 'axios';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import Redirect from 'react-router-dom'; 
>>>>>>> 794080badc25f133a8949aeda1ed04c9d135227b

interface props {
    id: Number
}

export const AddNewLog = ({id}: props) => {
    const navigate = useNavigate();
    const [logName, setLogName] = useState(''); 
    const [logMeasure, setLogMeasure] = useState(''); 
    return (
        <>
<<<<<<< HEAD
        <h1>Add a new log</h1>
        <div className='newLogForm'>
=======
>>>>>>> 794080badc25f133a8949aeda1ed04c9d135227b
        <form onSubmit={(e) => {
            e.preventDefault();
            const logObject = { 
                id: Number(id) + 1, 
                name: logName,
                measure: logMeasure
            }
            axios.post('http://localhost:3001/logs', logObject)
            .then(response => {
                console.log(response);
            })
            setLogName(''); 
            setLogMeasure(''); 
            navigate('/')
        } }>
            <input name="Name"
                value={logName}
                onChange={e => setLogName(e.target.value)} />
            <br />
            <input name="Measure"
                value={logMeasure}
                onChange={e => setLogMeasure(e.target.value)} />
            <br />
            <button type='submit'>Create</button>
        </form></>
    )
}

