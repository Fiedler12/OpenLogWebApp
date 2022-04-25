
import { collection, Firestore, getDocs } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { database } from '../components/Firebase';
import {ref, set, push} from "firebase/database"; 
import  userId from "./LoginPage"
import { AddNewLogSetup } from '../components/AddNewLogSetup'
import logs from '../components/data/db.json'
import { writeFile } from 'fs';

export const AddNewLog = () => {
    const db = database; 
    const [logName, setLogName] = useState("Name")
    const [logMeasure, setLogMeasure] = useState("Measure")
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            // const reference = ref(db, "logs");
            // const gamesRef = push(reference);
            // set(ref(db, "games/"), {
            //     id: userId,
            //     name: logName,
            //     measure: logMeasure
            const arrayStr = JSON.stringify(logs)
            const logArray = JSON.parse(arrayStr)
            const newLog = {"id" : logs.length + 1, "name" : logName, "measure" : logMeasure}; 
            logArray.push(newLog);
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