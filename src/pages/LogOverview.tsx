import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LogEntry } from '../components/LogEntry'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'

interface props {
  logs: log[]
  id: Number
}

interface log {
  name: string,
  measure: string,
  id: Number
}

export const LogOverview = ({ logs }: props, {id}: props) => {
  const logId = useParams().id
  let log: log | undefined;
  const current = new Date();
  useEffect(() => {
    log = logs.find((n: any) => n.id === Number(logId))
  }, logs);
  const [newValue, setNewValue] = useState('')

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
        axios.post('http://localhost:3001/values', newValueObject)
          .then(response => {
            console.log(response);
          })
        setNewValue('')
      }}>
        <input name="Value"
          value={newValue}
          onChange={e => setNewValue(e.target.value)} />
        <button type='submit'>Enter</button>
      </form>
      <div className='overviewrows' >
        <OverviewTable id={Number(logId)} />
        <OverviewGraph id={Number(logId)} />
      </div>
    </>
  )
}
