import React from 'react'
import { CartesianGrid, LineChart, Line, XAxis } from 'recharts';

function createData(
    id: number,
    amount: number,
    date: string
) {
    return { id, amount, date };
}

const data = [
    createData(3, 18, "01-01-2022"),
    createData(3, 14, "02-01-2022"),
    createData(3, 15, "03-01-2022"),
    createData(3, 16, "04-01-2022"),
    createData(3, 17, "05-01-2022"),
    createData(3, 12, "06-01-2022"),
    createData(3, 19, "07-01-2022"),
    createData(3, 11, "08-01-2022"),
    createData(3, 10, "08-01-2022"),
    createData(3, 20, "09-01-2022"),
]


export const OverviewGraph = () => {
    return (
        <LineChart
            width={1200}
            height={600}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="date" />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="amount" stroke="#ff7300" yAxisId={0} />
        </LineChart>

  )
}
