import React from 'react'
import { useParams } from 'react-router-dom'
import { LogEntry } from '../components/LogEntry'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'

interface props {
  logs: any
}

export const LogOverview = ( {logs}: props ) => {
  const id = useParams().id
  const log = logs.find((n: any) => n.id === Number(id))
  return (
    <>
    <h1>{log.name}</h1>
    <h2>{log.measure}</h2>
    <div className='overviewrows' >
    <OverviewTable id={Number(id)}/>
    <OverviewGraph id={Number(id)}/>
    </div>
    </>
  )
}
