import React, { useState } from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    Card, 
    CardMedia, 
    CardContent, 
    Grid, 
    AppBar, 
    Toolbar,
    MobileStepper 
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import './Details.css'

const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hotel = location.state?.hotelData;

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleBookingClick = () => {
        navigate('/booking', { state: { hotelData: hotel } });
    };
    return (
        <Box className="detail-container" >
            <AppBar position="static" className="details-header">
                <Toolbar>
                    <Typography variant="h6" className="details-title">
                        {hotel?.name}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" className="details-back-button" onClick={handleBackClick}>
                        Back to Hotels
                    </Button>
                </Toolbar>
            </AppBar>

<Box>
            <Grid item xs={12} md={6}>
                        <Card className="details-image-card">
                            <CardMedia
                                component="img"
                                height="300"
                                image={hotel?.imageUrl}
                                alt={hotel?.name}
                            />
                        </Card>
                    </Grid>
         <Box className="contents">

            
            <Grid container spacing={4} align="center" >
                
                <Grid item xs={12} md={6}>
                    <Card className="details-details-card">
                        <CardContent>
                            <Typography variant="h4" className="hotel-title">
                                {hotel?.name}
                            </Typography>
                            <Typography variant="body1" className="hotel-full-description">
                                {hotel?.description}
                            </Typography>
                            <Typography className="details-price">
                                ₹{hotel?.pricePerNight} per night
                            </Typography>
                            <Box className="details-amenities-section">
                                <Typography className="details-section-title">
                                    Amenities
                                </Typography>
                                <Grid container className="details-amenities-grid">
                                    {hotel?.amenities?.map((amenity, index) => (
                                        <Grid item xs={6} sm={4} key={index}>
                                            <Typography className="details-amenity-item">✓ {amenity}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 4 }}>
                                        <Typography variant="h5" gutterBottom align="center" sx={{ 
                                        fontWeight: 600,
                                        color: '#1976d2',
                                        marginBottom: '24px'
                                        }}>
                                          Room Types
                                        </Typography>
                                 <Grid container className="room-types-grid" spacing={3}>
                                    {hotel?.rooms?.map((room, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Card className="room-card">
                                                {room.images?.length > 0 && (
                                                    <Box className="carousel-container">
                                                        <Carousel
                                                            autoPlay={false}
                                                            animation="slide"
                                                            indicators={true}
                                                            navButtonsAlwaysVisible={true}>                                                          
                                                            {room.images.map((image, imageIndex) => (
                                                                <CardMedia
                                                                    key={imageIndex}
                                                                    component="img"
                                                                    className="details-room-image"
                                                                    image={image}
                                                                    alt={`${room.type} - Image ${imageIndex + 1}`}
                                                                />
                                                            ))}
                                                        </Carousel>
                                                    </Box>
                                                )}
                                                <CardContent className="details-room-content">
                                                    <Typography className="details-room-type">{room.type}</Typography>
                                                    <Typography className="details-room-capacity">Capacity: {room.capacity}</Typography>
                                                    <Typography className="details-features-title">Features:</Typography>
                                                    {room.features?.map((feature, idx) => (
                                                        <Typography key={idx} className="details-feature-item">
                                                            • {feature}
                                                        </Typography>
                                                    ))}
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box className="details-surroundings-section">
                                <Typography className="details-section-title">
                                    Nearby Attractions
                                </Typography>
                                <Grid container spacing={2}>
                                    {hotel?.surroundings?.map((surrounding, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Card className="details-surrounding-card">
                                                {surrounding.images?.length > 0 && (
                                                    <Box className="carousel-container">
                                                        <Carousel
                                                            autoPlay={false}
                                                            animation="slide"
                                                            indicators={true}
                                                            navButtonsAlwaysVisible={true}
                                                        >
                                                            {surrounding.images.map((image, imageIndex) => (
                                                                <CardMedia
                                                                    key={imageIndex}
                                                                    component="img"
                                                                    className="details-surrounding-image"
                                                                    image={image}
                                                                    alt={`${surrounding.name} - Image ${imageIndex + 1}`}
                                                                />
                                                            ))}
                                                        </Carousel>
                                                        
                                                    </Box>
                                                )}
                                                <CardContent className="details-surrounding-content">
                                                    <Typography className="details-surrounding-name">{surrounding.name}</Typography>
                                                    <Typography className="details-surrounding-description">{surrounding.description}</Typography>
                                                    <Typography className="details-surrounding-distance">Distance: {surrounding.distance}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
<br /><br />

                            <Box className="details-booking-section">
                                <Typography className="details-availability-status">
                                    Availability: {hotel?.availability ? 'Available' : 'Not Available'}
                                </Typography>
                                
                            </Box>
                            <Button
                                    className="details-booking-button"
                                    onClick={handleBookingClick}
                                    disabled={!hotel?.availability}
                                >
                                    Book Now
                                </Button><br /><br />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
</Box>
            
        </Box>
    );
};
export default Details;
