import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'

interface MyCardProps {
    title?: string,
    description?: string
}

export const MyCard = ({title, description}: MyCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardActionArea href="log-overview">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}
