import { Container, Grid } from '@mui/material'
import React from 'react'
import { MyCard } from '../components/MyCard'

export const Home = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                {[1, 2, 3, 4].map(card => {
                    return <Grid item xs={6} md={4}>
                        <MyCard title='Test'></MyCard>
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}
