import { Skeleton } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import './Poster.css'

const Poster = (props: any) => {

  const { data, loading, error }: any = { ...props }
  const skeleton = loading ? <CardSkeleton /> : null
  const card = data ? <MultiActionAreaCard /> : null
  const err = error ? <CardError /> : null
  return (<div>
    {skeleton}
    {card}
    {err}
    <CardSkeleton />
  </div>)
}

function CardError() {
  return (
    <Skeleton
      // sx={{ bgcolor: 'grey.1500' }}
      sx={{ bgcolor: 'red' }}
      variant="rectangular"
      width={196}
      height={334}
      animation="pulse"
    />
  )
}



function MultiActionAreaCard() {
  return (
    <div className='poster'>
      <CardActionArea>
        <Card sx={{ maxWidth: 196, height: 274 }} >
          <div className='poster__image'>
            <CardMedia
              component="img"
              // sx={{ ":hover": { transform: 'scale(1.5)' }, transition: 'scale 1s linear' }}
              width='196'
              height="274"
              image="https://pic.uma.media/pic/cardimage/e4/cc/e4cc4e6a011c03d542c501741cee7ca5.jpg?size=294&quality=90"
              alt="green iguana"
            />
          </div>
        </Card>
        <CardContent sx={{ color: 'white' }}>
          ssadasda
        </CardContent>
      </CardActionArea>
    </div >
  );
}

function CardSkeleton() {
  return (
    <Skeleton
      sx={{ bgcolor: '#1f1b2e' }}
      variant="rectangular"
      width={196}
      height={334}
      animation="pulse"
    />
  )
}


export default Poster