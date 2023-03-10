import Navbar from './Navbar'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg">
                <Box sx={{ margin: '1rem 0', height: '100vh' }}>
                    {children}
                </Box>
            </Container>
        </>
    )
}

export default Layout