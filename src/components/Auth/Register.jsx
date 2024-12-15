import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
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
        <Box className="auth-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Register
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
            </form>
            <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => navigate('/')}
                sx={{ mt: 2 }}
            >
                Back to Login
            </Button>
        </Box>
    );
};

export default Register;
