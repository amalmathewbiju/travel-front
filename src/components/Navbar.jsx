import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };
    
    const handleFirstPage = () => {
        navigate('/first');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <Box className="nav-page">
            <AppBar className="nav-header">
                <Toolbar className='toolbar'>
                    <Typography variant="h6" className="nav-title">
                        Yaathra
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button 
                        color="inherit" 
                        className="nav-button" 
                        onClick={handleHomeClick}
                    >
                        Home
                    </Button>
                    <Button 
                        color="inherit" 
                        className="nav-button" 
                        onClick={handleFirstPage}
                    >
                        About
                    </Button>
                    <Button 
                        color="inherit" 
                        className="nav-button" 
                        onClick={handleLogoutClick}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
