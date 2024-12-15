import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Typography, TextField, Box,
  Button, Card, CardMedia, CardContent, Grid,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import './Hotels.css';
import axios from 'axios';

const Hotels = () => {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const [hotels, setHotels] = useState([]);
  const [placeName, setPlaceName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);

  const handleBackClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    // Fetch place name
    axios.get(`http://localhost:3000/places/${placeId}`)
        .then((response) => {
            setPlaceName(response.data.name);
        })
        .catch((error) => console.error('Error fetching place:', error));

    // Fetch hotels for the specific place
    axios.get(`http://localhost:3000/hotels/places/${placeId}`)
        .then((response) => {
            console.log('Hotels data:', response.data); // Add this for debugging
            setHotels(response.data);
            setFilteredHotels(response.data);
        })
        .catch((error) => console.error('Error fetching hotels:', error));
}, [placeId]);

useEffect(() => {
  const results = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredHotels(results);
}, [searchTerm, hotels]);

const handleBooking = (hotel) => {
  navigate(`/details/${hotel._id}`, { state: { hotelData: hotel } });
};

  return (
    <Box className="hotels-page">
      <AppBar className="hotels-header">
        <Toolbar className="toolbar">
          <Typography className="hotels-title">
            Hotels in {placeName}
          </Typography>
          <Button className="back-button" onClick={handleBackClick}>
            Back to Places
          </Button>
        </Toolbar>
      </AppBar>

      <Box className="search-container">
        <TextField
          className="search-field"
          placeholder="Search hotels..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Box className="hotels-grid">
        <Grid container className="grid-container">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <Grid item className="grid-item" key={hotel._id}>
                <Card className="hotel-card">
                  <CardMedia
                    className="hotel-image"
                    component="img"
                    image={hotel.imageUrl || `https://via.placeholder.com/300x200?text=${hotel.name}`}
                    alt={hotel.name}
                  />
                  <CardContent className="hotel-content">
                    <Typography className="hotel-name">
                      {hotel.name}
                    </Typography>
                    <Typography className="hotel-description">
                      {hotel.description}
                    </Typography>
                    <Typography className="hotel-price">
                      ₹{hotel.pricePerNight} per night
                    </Typography>
                    <Button
    className="book-button"
    variant="contained"
    color="primary"
    onClick={() => handleBooking(hotel)}
>
    View Details
</Button>

                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography className="no-hotels">
              No hotels found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Hotels;
