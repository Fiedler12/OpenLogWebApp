import { useState } from 'react'
import axios from 'axios';

interface props {
    id: Number
}

export const AddNewLog = ({id}: props) => {
    const [logName, setLogName] = useState(''); 
    const [logMeasure, setLogMeasure] = useState(''); 
    return (
        <>
        <div className='newLogForm'>
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
                </form>
            </div>
        </>
    )
}

