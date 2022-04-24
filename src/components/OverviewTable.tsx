import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import values from '../components/data/values.json'

function createData(
    id: number,
    amount: number, 
    date: string
) {
    return {id, amount, date}; 
}

const rows = [ 
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
    createData(3, 12, "10-01-2022"),
    createData(3, 19, "11-01-2022"),
    createData(3, 11, "12-01-2022"),
    createData(3, 10, "13-01-2022"),
    createData(3, 20, "14-01-2022"),
];

interface tableProps {
    id: Number 
}

export default function OverviewTable({id}: tableProps) {
    const realValues = values.filter(value => Number(value.logId) === id)
    return (
        <TableContainer className="overviewTable" component={Paper}>
            <Table id="fix-head" sx={{ maxWidth: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Amount logged</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {realValues.map((row) => (
                        <TableRow
                        key={row.value}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell component="th" scope="row">
                                {row.value}
                            </TableCell>
                            <TableCell align='right'>{row.date}</TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
