import { LoginSharp } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../components/DatabaseService'
import { LogEntry } from '../components/LogEntry'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'

interface props {
  id: Number
}

interface log { 
  id: Number,
  name: string,
  measure: string
}

interface value {
  logId: Number
    id: Number
    value: Number
    date: string 
}


export const LogOverview = ({id}: props) => {
  const logId = useParams().id
  let log: log | undefined;
  const current = new Date();
  const [values, setValues] = useState<value[]>([])
  const [newValue, setNewValue] = useState('')
  const [logs, setLogs] = useState<log[]>()

  async function getValues() {
    let currentValues = await DatabaseService.getValues(); 
    setValues(currentValues); 
  }

  async function getLogs() {
    let allLogs = await DatabaseService.getLogs();
    setLogs(allLogs); 
  }

  useEffect(() => {
    getLogs();
    log = logs?.find((n: any) => n.id === Number(logId))
  }, []);

  useEffect(() => {
    getValues();
  }, [newValue]); 

  return (
    <>
      <h1>{log?.name}</h1>
      <h2>{log?.measure}</h2>
      <br />
      <form onSubmit={(e) => {
        e.preventDefault();
        const newValueObject = {
          logId: Number(logId),
          id: Number(id),
          value: Number(newValue),
          date: ('0' + current.getDate()).slice(-2) + '-' + ('0' + current.getMonth()).slice(-2) + '-' + current.getFullYear()
        }
        DatabaseService.postValue(newValueObject)
        setNewValue('')
      }}>
        <input name="Value"
          value={newValue}
          onChange={e => setNewValue(e.target.value)} />
        <button type='submit'>Enter</button>
      </form>
      <div className='overviewrows' >
        <OverviewTable receivedValues={values} />
        <OverviewGraph receivedValues={values} />
      </div>
    </>
  )
}
