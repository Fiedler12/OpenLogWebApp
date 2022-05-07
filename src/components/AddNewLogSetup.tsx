import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { autocompleteClasses, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css_files/AddNewLog.css'
import { Translate } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',


}));
export const AddNewLogSetup = () => {
  return (
      <>
        
        <Box sx={{ flexGrow: 1 }} className='leftgrid'>

          <Grid container spacing={0}>

              <Grid item xs={6} md={6}>
                  <Item className='item1'>
                      <header>Add New Log Type</header>
                      <TextField id="textfield_1" label="Add New Log Type" />
                      <header>Insert Unit of New Log</header>
                      <TextField id="textfield_2" label="Insert unit" />
                  </Item>

                  <Item className='item2'>
                      <Button>
                          <Link to="/" style={{ textDecoration: 'none' }}>  Back </Link>
                      </Button>

                      <Button>
                          <Link to="/" style={{ textDecoration: 'none' }}>  Confirm </Link>
                      </Button>
                  </Item>
              </Grid>


              <Grid item xs={6} md={6}>
                  <Item>
                      <img src='Run.jpg' className='run'></img>
                  </Item>

                  <Item>
                      <img src='food.jpg' className='picture'></img>
                  </Item>

                  <Item>
                      <img src='statistik.jpg' className='picture'></img>
                  </Item>

              </Grid>

          </Grid>
      </Box></>

    
  )
}
