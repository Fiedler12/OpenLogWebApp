
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface props {
    id: Number
}

export const AddNewLog = ({id}: props) => {
    const navigate = useNavigate();
    const [logName, setLogName] = useState(''); 
    const [logMeasure, setLogMeasure] = useState(''); 
    return (
        <>
        <h1>Add a new log</h1>
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
        </form>
        </div>
        </>
    )
}

