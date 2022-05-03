import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LogEntry } from '../components/LogEntry'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'
import DatabaseService from '../components/DatabaseService'

interface props {
  id: Number
}

interface log {
  name: string,
  measure: string,
  id: Number
}

interface value {
  logId: Number,
  id: Number,
  value: Number,
  date: string
}

export const LogOverview = ({id}: props) => {
  const logId = useParams().id
  const [logs, setLogs] = useState<log[]>([]); 
  let log: log | undefined;
  const current = new Date();
  const [newValue, setNewValue] = useState('')
  const [values, setValues] = useState<value[]>([])
  useEffect(() => {
    getLog();
    console.log("hi")
  }, []);

  async function postValue(value: {}) {
    await DatabaseService.postValue(value)
  }

  async function getLog() {
    var response = await DatabaseService.getLogs();
    log = logs.find((n: any) => n.id === Number(logId)) 
    setLogs(response); 
  }

  async function getValues() {
    let allValues: value[] = await DatabaseService.getValues();
    let filtered = allValues.filter(value => value.logId === Number(logId))
    setValues(filtered); 
  }

  useEffect(() => {
    getValues();
  }, [newValue ])


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
        console.log(newValueObject)
        postValue(newValueObject); 
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
