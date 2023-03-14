import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Layout from "../components/Layout"
import { Button, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addNewContactAction } from '../redux/action/actions';
import { useNavigate } from 'react-router-dom';

const AddNewContactPage = () => {

    const [newContact, setNewContact] = React.useState({
        name: '',
        email: '',
        phone: ''
    })

    const [errMsg, setErrMsg] = React.useState('')

    const { name, email, phone } = newContact

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        setNewContact({ ...newContact, [name]: value })
    }



    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            return setErrMsg('All Fields Are Required!')
        } else {
            dispatch(addNewContactAction(newContact))
            navigate('/')
            setErrMsg('')
        }

    }

    return (
        <Layout>
            <Box
                onSubmit={submitHandler}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3,
                    borderRadius: '10px',
                    padding: '15px'
                }}
                noValidate
                autoComplete="off"
                >
                <Typography variant='h5' color='GrayText'>Add New User</Typography>

                <TextField onChange={handleChange} name='name' value={name} id="standard-basic" label="Name" variant="outlined" size="small" />
                <TextField onChange={handleChange} name='email' value={email} id="standard-basic" label="Email" variant="outlined" size="small" />
                <TextField onChange={handleChange} name='phone' value={phone} id="standard-basic" label="Phone" variant="outlined" size="small" />
                <br />
                <Button type="submit" variant='contained' color='info' sx={{ width: '15rem', alignSelf: 'end' }}>Add new contact</Button>
            </Box>
            <Box sx={{ margin: '1rem 0', color: 'red' }}>{errMsg && errMsg}</Box>
        </Layout>
    )
}

export default AddNewContactPage