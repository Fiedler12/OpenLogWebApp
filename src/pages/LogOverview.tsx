import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LogEntry } from '../components/LogEntry'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'

interface props {
  logs: any[]
}

export const LogOverview = ( {logs}: props) => {
  const id = useParams().id
  let log: any = {}
  useEffect(() => {
    log = logs.find((n: any) => n.id === Number(id)) 
  }, logs);
  
  return (
    <>
    <h1>{log?.name}</h1>
    <h2>{log?.measure}</h2>
    <div className='overviewrows' >
    <OverviewTable id={Number(id)}/>
    <OverviewGraph id={Number(id)}/>
    </div>
    </>
  )
}
