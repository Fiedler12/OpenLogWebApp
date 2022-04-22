<<<<<<< HEAD

import { collection, Firestore, getDocs } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { database } from '../components/Firebase';
import {ref, set, push} from "firebase/database"; 
import  userId from "./LoginPage"

=======
import React from 'react'
import { AddNewLogSetup } from '../components/AddNewLogSetup'
>>>>>>> d497b8f28f2bf25d17caf92b7da618dc7acbcef8

export const AddNewLog = () => {
    const db = database; 
    const [logName, setLogName] = useState("Name")
    const [logMeasure, setLogMeasure] = useState("Measure")
    return (
<<<<<<< HEAD
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            const reference = ref(db, "logs");
            const gamesRef = push(reference);
            set(ref(db, "games/"), {
                id: userId,
                name: logName,
                measure: logMeasure
            });
        } }>
            <input name="  Name"
                value={logName}
                onChange={e => setLogName(e.target.value)} />
            <br />
            <input name="Measure"
                value={logMeasure}
                onChange={e => setLogMeasure(e.target.value)} />
            <br />
            <button type='submit'>Create</button>
        </form></>
=======
        <AddNewLogSetup/>
   
>>>>>>> d497b8f28f2bf25d17caf92b7da618dc7acbcef8
    )
}