import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post('http://localhost:3000/auth/register', {
        name: formData.name,
        username: formData.email,
        password: formData.password
      });
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error);
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <Grid container className="auth-container">
      <Grid item xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://i.pinimg.com/736x/90/c8/aa/90c8aacadb31c6408d760d399e5262a1.jpg" alt="Register" style={{ width: '100%', height: 'auto',borderRadius:'50px',marginTop:'50px' }} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4" align='center' component="h1" gutterBottom>
            Register Form
          </Typography>
          <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <TextField
              name="name"
              label="Name"
              type="text"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => navigate('/')}
              sx={{ mt: 2 }}
            >
              Back to Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
