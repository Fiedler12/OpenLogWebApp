import { Container, Fab, Grid, Link } from '@mui/material'
import React from 'react'
import { FloatingActionButton } from '../components/FloatingActionButton';
import { MyCard } from '../components/MyCard'


interface logProps {
    logs: any
}


export const Home = ({logs}: logProps) => {
    return (
        <><Container>
            <Grid container spacing={5}>
                {logs.map((log: any) => {
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
