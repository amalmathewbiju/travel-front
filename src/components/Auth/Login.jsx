import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username: email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Grid container className="auth-container">
      <Grid item xs={12} sm={4}>
        <img src="https://i.pinimg.com/736x/90/c8/aa/90c8aacadb31c6408d760d399e5262a1.jpg" alt="Login" style={{ width: '100%', height: 'auto',marginTop:'50px',borderRadius:'50px' }} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography variant="h4" component="h1" align='center' gutterBottom>Login Form</Typography>
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => navigate('/register')}
          sx={{ mt: 2 }}
        >
          Register
        </Button>
        </form>
        
      </Grid>
    </Grid>
  );
};

export default Login;
