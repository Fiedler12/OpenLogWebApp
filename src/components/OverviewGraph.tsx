import React, { useEffect, useState } from 'react'
import { CartesianGrid, LineChart, Line, XAxis, YAxis } from 'recharts';
import axios from 'axios'; 

interface props {
    receivedValues: value[]
}

interface value {
    id: Number,
    logId: Number,
    value: Number,
    date: string
}

const response = axios.get('http://localhost:3001/values')

export const OverviewGraph = ({receivedValues}: props) => {
    const [values, setValues] = useState<value[]>([]); 

    useEffect(() => {
        setValues(receivedValues); 
    }, [receivedValues])

    return (
        <><div
            style={{
                backgroundColor : 'white'
            }} /><LineChart className='overviewgraph'
                width={1200}
                height={600}
                data={values}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="date" />
                <YAxis dataKey="value" />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
            </LineChart></>

  )
}
