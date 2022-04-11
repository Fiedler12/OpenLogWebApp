import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id: number,
    amount: number, 
    date: string
) {
    return {id, amount, date}; 
}

const rows = [ 
    createData(3, 18, "01-01-2022"),
    createData(3, 18, "02-01-2022"),
    createData(3, 18, "03-01-2022"),
    createData(3, 18, "04-01-2022"),
    createData(3, 18, "05-01-2022"),
    createData(3, 18, "06-01-2022"),
    createData(3, 18, "07-01-2022"),
    createData(3, 18, "08-01-2022"),
    createData(3, 18, "08-01-2022"),
    createData(3, 18, "09-01-2022"),
];

export default function OverviewTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300, maxWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Amount logged</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.amount}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell component="th" scope="row">
                                {row.amount}
                            </TableCell>
                            <TableCell align='right'>{row.date}</TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}