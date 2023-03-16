import './app.css'
import { Skeleton } from '@mui/material'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function App() {
  return (
    <div className='app'>
      <header></header>
      <main>
        <CardSkeleton />
        <MultiActionAreaCard />
      </main>
    </div>
  )
}



function MultiActionAreaCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 196, height: 334, background: '#1c1c1c' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width='196'
            height="274"
            image="https://pic.uma.media/pic/cardimage/e4/cc/e4cc4e6a011c03d542c501741cee7ca5.jpg?size=294&quality=90"
            alt="green iguana"
          />
          <CardContent sx={{ height: 60 }}>
            <Typography gutterBottom variant="body1" component="div" color="grey.300">
              <span>fiml</span>
              <span>fiml</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

function CardSkeleton() {
  return (
    <Skeleton
      // sx={{ bgcolor: 'grey.1500' }}
      sx={{ bgcolor: '#1c1c1c' }}
      variant="rectangular"
      width={196}
      height={334}
      animation="pulse"
    />
  )
}






export default App