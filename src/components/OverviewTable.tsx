import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';



interface props {
    receivedValues: value[]
}

interface value {
    id: Number,
    logId: Number,
    value: Number,
    date: string
}


export default function OverviewTable({receivedValues}: props) {
    const [values, setValues] = useState<value[]>([]); 
    
    useEffect(() => {
        setValues(receivedValues)
    }, [receivedValues])

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
                    {values.map((row) => (
                        <TableRow
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
