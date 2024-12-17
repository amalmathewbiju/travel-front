import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Typography, TextField, Box,
  Button, Card, CardMedia, CardContent, Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);



  const handleCardClick = (placeId) => {
    navigate(`/feature/${placeId}`);
  };
  

  const handleHotelsClick = (e, placeId) => {
    e.stopPropagation();
    navigate(`/hotels/${placeId}`);
  };

  useEffect(() => {
        axios.get('http://localhost:3000/places')
            .then((response) => {
                setPlaces(response.data);
                setFilteredPlaces(response.data);
            })
            .catch((error) => console.error('Error fetching places:', error));
    }, []);

    useEffect(() => {
      const results = places.filter((place) =>
          place.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPlaces(results);
  }, [searchTerm, places]);

  return (
    <Box className="home-container">
      <Navbar/>
      <Box className="search-section">
        <TextField
          className="search-input"
          variant="outlined"
          placeholder="Search destinations..."
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Box className="main-content">
        <Typography variant="h4" className="welcome-text">
          Welcome to Kerala
        </Typography><br /><br />
        <Grid container spacing={4} className="places-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <Grid item xs={12} sm={6} md={3} key={place._id} className="grid-item">
                <Card className="place-card" onClick={() => handleCardClick(place._id)} sx={{ height: '100%' }}>
                  <CardMedia
                    className="place-image"
                    component="img"
                    height="200"
                    image={place.imageUrl || `https://via.placeholder.com/300x200?text=${place.name}`}
                    alt={place.name}
                  />
                  <CardContent className="place-content">
                    <Typography variant="h6" className="place-name">
                      {place.name}
                    </Typography>
                    <Typography variant="body2" className="place-description" sx={{ mb: 2 }}>
                      {place.description.length > 150 
                        ? `${place.description.substring(0, 150)}...` 
                        : place.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={(e) => handleHotelsClick(e, place._id)}
                      >
                        View Hotels
                      </Button>
                      <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => handleCardClick(place._id)}
                        >
                          Explore More
                        </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography className="no-results">
              No destinations found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
