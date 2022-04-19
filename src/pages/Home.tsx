import { Container, Fab, Grid } from '@mui/material'
import React from 'react'
import { FloatingActionButton } from '../components/FloatingActionButton';
import { MyCard } from '../components/MyCard'


function createData(
    name: string,
    measure: string
) {
    return { name, measure };
}

const data = [
    createData('blodsukker', 'mg/l'),
    createData('Happiness', '1-10'),
    createData('insulin', 'units'),
    createData('poopoo', 'mg/l'),
    createData('bingbong', 'Dogs in the frontyard'),
    createData('blodsukker', 'mg/l'),

];

export const Home = () => {
    return (
        <><Container>
            <Grid container spacing={2}>
                {data.map(card => {
                    return <Grid item xs={6} md={4}>
                        <MyCard title={card.name}
                            description={card.measure}></MyCard>
                    </Grid>;
                })}
            </Grid>
            <div className='fab'>
                <FloatingActionButton></FloatingActionButton>
            </div>
        </Container>
        </>
    )
}
