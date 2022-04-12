import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export const FloatingActionButton = () => {
  return (
      <Box sx={{ '& > :not(style': { m:1}}}>
          <Fab color='secondary' aria-label='add' href='add-new-log'>
              <AddIcon />
          </Fab>
      </Box>
  )
}
