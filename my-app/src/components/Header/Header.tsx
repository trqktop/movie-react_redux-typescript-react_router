import React from 'react'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';





import { Link } from 'react-router-dom'


function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: 100, flexDirection: 'column' }} >
            <Link to='/'>
                <BottomNavigationAction label="Home" icon={<HomeIcon fontSize={'large'} />} sx={{
                    color: '#8d83b9',
                }} />
            </Link>
            <Link to='/movie'>
                <BottomNavigationAction label="Movie" icon={<MovieIcon fontSize={'large'} />} sx={{ color: '#8d83b9' }} />
            </Link>
            <Link to='/serials'>
                <BottomNavigationAction label="Serials" icon={<LiveTvIcon fontSize={'large'} />} sx={{ color: '#8d83b9' }} />
            </Link>
            <Link to='/cartoons'>
                <BottomNavigationAction label="cartoons" icon={<ChildFriendlyIcon fontSize={'large'} />} sx={{ color: '#8d83b9' }} />
            </Link>
        </Box >
    );
}




const Header = () => {
    return <header className='header'>
        <SimpleBottomNavigation />
    </header>
}




export default Header