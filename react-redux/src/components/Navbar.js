import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export default function ButtonAppBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Button component={Link} to='/' sx={{ textTransform: 'capitalize', fontSize: '1.5rem', color:'aquamarine' }} color="inherit">Contacts App</Button>
                    </Box>
                    <Box>
                        <Button component={Link} to='/add-new-contact' size="small" sx={{ textTransform: 'capitalize', marginInline: '10px' }} color="inherit">Add New User</Button>
                        <Button component={Link} to='/greeting' sx={{ textTransform: 'capitalize' }} variant='outlined' size="small" color="inherit">important note</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}