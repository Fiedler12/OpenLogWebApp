import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'

interface MyCardProps {
    title?: string,
    description?: string
}

export const MyCard = ({title, description}: MyCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="../logo192.png  "
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title || 'Lizard'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}
