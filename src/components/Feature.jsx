import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box,
  Button, Card, CardMedia, CardContent, Grid,
  Divider
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Feature.css';
import Navbar from './Navbar';

const FeatureImageGallery = ({ images, featureName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Box className="image-scroll-container">
      <Box 
        className="auto-scroll-images"
        sx={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, imgIndex) => (
          <CardMedia
            key={imgIndex}
            component="img"
            height="180"
            image={image}
            alt={`${featureName} ${imgIndex + 1}`}
            className="image-slide"
            sx={{ objectFit: 'cover' }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Feature = () => {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const [place, setPlace] = useState(null);

  const handleHotelsClick = () => {
    navigate(`/hotels/${placeId}`);
  };

  useEffect(() => {
    const fetchPlaceData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/places/${placeId}`);
            setPlace(response.data);
        } catch (error) {
            console.error('Error fetching place:', error);
        }
    };

    fetchPlaceData();
}, [placeId]);

  if (!place) return null;

  return (
    <Box className="feature-container">
      <Navbar/>

      <Box className="feature-content">
        {/* Main Place Information */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="feature-image-card">
              <CardMedia
                component="img"
                height="300"
                image={place.imageUrl}
                alt={place.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="feature-details-card">
              <CardContent>
                <Typography variant="h4" className="place-title">
                  {place.name}
                </Typography>
                <Typography variant="body1" className="place-full-description">
                  {place.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="view-hotels-button"
                  onClick={handleHotelsClick}
                >
                  View Hotels
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Famous Places Section */}
        {place.famousPlaces && place.famousPlaces.length > 0 && (
          <Box sx={{ mt: 4 }} >
            <Typography variant="h5" gutterBottom align="center" sx={{ 
            fontWeight: 600,
            color: '#1976d2',
            marginBottom: '24px'
            }}>
             Famous Places
            </Typography>

            <Grid container spacing={3} justifyContent={'center'}>
              {place.famousPlaces.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <FeatureImageGallery 
                      images={feature.images} 
                      featureName={feature.name} 
                    />
                    <CardContent align="center">
                      <Typography variant="h6">{feature.name}</Typography>
                      <Typography variant="body2">{feature.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Cultural Attractions Section */}
        {place.culturalAttractions && place.culturalAttractions.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center" sx={{ 
            fontWeight: 600,
            color: '#1976d2',
            marginBottom: '24px'
            }}>
              Cultural Attractions
            </Typography>
            <Grid container spacing={3}>
              {place.culturalAttractions.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <FeatureImageGallery 
                      images={feature.images} 
                      featureName={feature.name} 
                    />
                    <CardContent align="center">
                      <Typography variant="h6">{feature.name}</Typography>
                      <Typography variant="body2">{feature.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Must Explore Section */}
        {place.mustExplore && place.mustExplore.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center" sx={{ 
            fontWeight: 600,
            color: '#1976d2',
            marginBottom: '24px'
            }}>
              Must Explore
            </Typography>
            <Grid container spacing={3}>
              {place.mustExplore.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <FeatureImageGallery 
                      images={feature.images} 
                      featureName={feature.name} 
                    />
                    <CardContent align="center">
                      <Typography variant="h6">{feature.name}</Typography>
                      <Typography variant="body2">{feature.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Feature;
