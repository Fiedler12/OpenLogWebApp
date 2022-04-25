
import { collection, Firestore, getDocs } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { database } from '../components/Firebase';
import {ref, set, push} from "firebase/database"; 
import  userId from "./LoginPage"
import { AddNewLogSetup } from '../components/AddNewLogSetup'

export const AddNewLog = () => {
    const [logName, setLogName] = useState('')
    const [logMeasure, setLogMeasure] = useState('')
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            setLogName(''); 
            setLogMeasure(''); 
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