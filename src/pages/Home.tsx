import { Container, Fab, Grid, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'; 
import { FloatingActionButton } from '../components/FloatingActionButton';
import { MyCard } from '../components/MyCard';
import DatabaseService from '../components/DatabaseService'; 


interface log {
    id: Number
    name: string
    measure: string
}

export const Home = () => {
    const [currentLogs, setCurrentLogs] = useState<log[]>([]);

    async function GetLogs() {
        let allLogs = await DatabaseService.getLogs();
        setCurrentLogs(allLogs); 
    }

    useEffect(() => {
        GetLogs();
    }, []);

    return (
        <><Container>
            <Grid container rowSpacing={4} columnSpacing={6} maxWidth="sm">
                {currentLogs.map((log: any) => {
                    return <Grid item xs={6} md={4}>
                            <Link href={'/log-overview/' + log.id}>
                            <MyCard
                            id={log.id}
                            title={log.name}
                            description={log.measure}></MyCard>
                            </Link>
                    </Grid>;
                })}
            </Grid>
        </Container>
        <div className='fab'>
                <FloatingActionButton></FloatingActionButton>
            </div>
        </>
    )
}
