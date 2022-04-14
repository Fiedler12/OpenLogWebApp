import React from 'react'
import { FloatingActionButton } from '../components/FloatingActionButton'
import { LogEntry } from '../components/LogEntry'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'

export const LogOverview = () => {
  return (
    <>
    <h1>Logname</h1>
    <div className='topsite'>
    <h2>UnitName</h2>
    <LogEntry></LogEntry>
    </div>
    <div className='overviewrows' >
    <OverviewTable />
    <OverviewGraph />
    </div>
    </>
  )
}
