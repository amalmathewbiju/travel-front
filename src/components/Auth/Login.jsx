import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
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
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Box className="auth-container">
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
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
      </form>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => navigate('/register')}
        sx={{ mt: 2 }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Login;
