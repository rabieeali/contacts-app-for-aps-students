import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './Navbar'


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: '5rem 0', }}>
                <Box sx={{ height: '100vh' }}>
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Layout