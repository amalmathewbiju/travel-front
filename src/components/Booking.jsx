import React, { useState } from 'react';
import { 
    Box, 
    TextField, 
    Checkbox, 
    FormControlLabel, 
    Button, 
    Typography,
    Paper,
    Grid 
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function Booking() {
    const [bookingData, setBookingData] = useState({
        name: '',
        age: '',
        mobile: '',
        idProof: '',
        checkIn: null,
        checkOut: null,
        extras: {
            breakfast: false,
            airportPickup: false,
            sightseeing: false,
            spa: false
        }
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Successfully confirmed! Our agent will call you.');
      navigate('/home');
  };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Complete Your Booking
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    required
                                    value={bookingData.name}
                                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Age"
                                    type="number"
                                    required
                                    value={bookingData.age}
                                    onChange={(e) => setBookingData({...bookingData, age: e.target.value})}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    required
                                    value={bookingData.mobile}
                                    onChange={(e) => setBookingData({...bookingData, mobile: e.target.value})}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="ID Proof Number"
                                    required
                                    value={bookingData.idProof}
                                    onChange={(e) => setBookingData({...bookingData, idProof: e.target.value})}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <DatePicker
                                    label="Check-in Date"
                                    value={bookingData.checkIn}
                                    onChange={(date) => setBookingData({...bookingData, checkIn: date})}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <DatePicker
                                    label="Check-out Date"
                                    value={bookingData.checkOut}
                                    onChange={(date) => setBookingData({...bookingData, checkOut: date})}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Extra Services
                                </Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={bookingData.extras.breakfast}
                                                    onChange={(e) => setBookingData({
                                                        ...bookingData,
                                                        extras: {...bookingData.extras, breakfast: e.target.checked}
                                                    })}
                                                />
                                            }
                                            label="Breakfast ($10/day)"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={bookingData.extras.airportPickup}
                                                    onChange={(e) => setBookingData({
                                                        ...bookingData,
                                                        extras: {...bookingData.extras, airportPickup: e.target.checked}
                                                    })}
                                                />
                                            }
                                            label="Airport Pickup ($30)"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={bookingData.extras.sightseeing}
                                                    onChange={(e) => setBookingData({
                                                        ...bookingData,
                                                        extras: {...bookingData.extras, sightseeing: e.target.checked}
                                                    })}
                                                />
                                            }
                                            label="Sightseeing ($50)"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={bookingData.extras.spa}
                                                    onChange={(e) => setBookingData({
                                                        ...bookingData,
                                                        extras: {...bookingData.extras, spa: e.target.checked}
                                                    })}
                                                />
                                            }
                                            label="Spa Access ($40)"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Confirm Booking
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </LocalizationProvider>
    );
}

export default Booking;
