import { Container, Fab, Grid, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'; 
import { FloatingActionButton } from '../components/FloatingActionButton';
import { MyCard } from '../components/MyCard';



interface logProps {
    logs: any
}


export const Home = ({logs}: logProps) => {
    const [currentLogs, setCurrentLogs] = useState(logs);
    useEffect(() => {
        setCurrentLogs(logs); 
    }, [logs]);
    return (
        <><Container>
            <Grid container rowSpacing={4} columnSpacing={6} maxWidth="sm">
                {logs.map((log: any) => {
                    return <Grid item xs={6} md={5}>
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
