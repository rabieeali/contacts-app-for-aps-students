import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to="/">
                            <Typography sx={{ fontSize: '2rem', color: colors.orange['600'] }}>
                                Contacts App
                            </Typography>
                        </Link>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                            <Link to="/contacts"><Typography sx={{ color: colors.red['50'] }}>
                                All Contacts
                            </Typography>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
}