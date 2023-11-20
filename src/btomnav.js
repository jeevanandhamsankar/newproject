import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { BottomNavigation,BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Home from './homebtom';
import Favorites from './favbtom';
import Location from './locbtom';

function Cat(){
 return(
    <Router>
        <div className="Cat1">
            <div className="Cat2">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="favorites" element={<Favorites/>} />
                    <Route path="location" element={<Location />} />
                </Routes>
            </div>

            <BottomNavigation
            style={{
                position:'fixed',
                bottom:0,
                width:'100%',
            }}
            >
                <Link to="/">
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                </Link>
                <Link to="favorites">
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} />
                </Link>
                <Link to="location">
                    <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
                </Link>
            </BottomNavigation>
        </div>
    </Router>
 );
}

export default Cat;
