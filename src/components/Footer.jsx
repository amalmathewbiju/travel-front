import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{
      position:'fixed',
     bottom:0,
      left: 0,
      width: '100%',
      textAlign: 'center',
      padding: '15px',
      background: '#f8f8f8',
      fontSize: '14px',
      borderTop: '1px solid #e0e0e0',
      zIndex: 1000
    }}>
      <Typography sx={{ color: '#000000' }} variant="body2">
        &copy; 2024 CCompany. All rights reserved.
      </Typography>
    </Box>
  );
}
