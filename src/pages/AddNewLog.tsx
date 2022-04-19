
import { collection, Firestore, getDocs } from 'firebase/firestore/lite';
import React, { useState } from 'react'


export const AddNewLog = () => {
    const [logName, setLogName] = useState("Name")
    const [logMeasure, setLogMeasure] = useState("Measure")
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <input name ="Name"
            value={logName}
            onChange={e => setLogName(e.target.value)}
            />
            <br/>
            <input name="Measure"
            value={logMeasure}
            />
            <button type='submit'>Create</button>
        </form>
    )
}