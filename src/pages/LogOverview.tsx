import React from 'react'
import { OverviewGraph } from '../components/OverviewGraph'
import OverviewTable from '../components/OverviewTable'

export const LogOverview = () => {
  return (
    <>
    <h1>Logname</h1>
    <h2>UnitName</h2>
    <div className='overviewrows' >
    <OverviewTable />
    <OverviewGraph />
    </div>
    </>
  )
}
