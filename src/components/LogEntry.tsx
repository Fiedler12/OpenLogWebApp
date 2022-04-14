import { Box, Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';


export const LogEntry = () => {
  return (
        <Box sx={{ '& > :not(style': { m:1}}}>
          <Fab color='primary' size='small' aria-label='add'>
              <AddIcon />
          </Fab>
      </Box>  )
}
