import React from 'react'
import { CartesianGrid, LineChart, Line, XAxis, YAxis } from 'recharts';
import values from '../components/data/values.json'; 

interface graphProps {
    id: Number
}

export const OverviewGraph = ({id}: graphProps) => {
    const realValues = values.filter(value => Number(value.logId) === id)
    console.log(realValues)
    return (
        <><div
            style={{
                backgroundColor : 'white'
            }} /><LineChart className='overviewgraph'
                width={1200}
                height={600}
                data={realValues}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="date" />
                <YAxis dataKey="value" />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
            </LineChart></>

  )
}
