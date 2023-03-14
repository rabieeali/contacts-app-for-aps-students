import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <Box sx={{ display: 'grid', height: '100vh', placeItems: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h5' color='red'>
                    404 | Page Not Found
                </Typography>
                <br />
                <Button component={Link} variant='outlined' to='/'>Go Home</Button>
            </Box>
        </Box>
    )
}

export default NotFoundPage