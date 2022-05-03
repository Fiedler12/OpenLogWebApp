import React, { useEffect, useState } from 'react'
import { CartesianGrid, LineChart, Line, XAxis, YAxis } from 'recharts';
import axios from 'axios'; 

interface graphProps {
    receivedValues: value[]
}

interface value {
    logId: Number
    id: Number
    value: Number
    date: string 
}

export const OverviewGraph = ({receivedValues}: graphProps) => {
    const [values, setValues] = useState<value[]>([]); 
    useEffect(() => {
        setValues(receivedValues);  
    }, [receivedValues]);    
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
