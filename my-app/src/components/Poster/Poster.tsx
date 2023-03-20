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
  const card = data ? <MultiActionAreaCard data={data} /> : null
  const err = error ? <CardError /> : null


  return (<div>
    {skeleton}
    {card}
    {err}
    {/* <CardSkeleton /> */}
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



function MultiActionAreaCard({ ...props }: any) {


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
              image={props.data.posterUrl}
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