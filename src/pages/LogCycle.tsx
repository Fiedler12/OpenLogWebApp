import { render } from '@testing-library/react'

import React from 'react'
import ListExample from '../components/ListExample'
import { Card, Container, Grid } from '@mui/material'
import { Button } from '@mui/material'
import BasicCard from '../components/LogCyckleCard'

function createData(
  id: number,
  name: string
) {
  return {id, name}; 
}

function addData(
  id: number,
  name: string) {
    data.push(createData(id, name))
  }

  let data = [
    createData(1, "John Doe"),
    createData(2, "Victor Wayne"),
    createData(3, "Jane Doe"),
  ];
export const LogCycle = () => {

  return (
    <Grid container>
      <Grid>
        <BasicCard></BasicCard>
        </Grid>


    </Grid>
    
    
  
  )
  
}







