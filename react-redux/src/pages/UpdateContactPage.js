import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Layout from "../components/Layout"

import { useDispatch, useSelector } from 'react-redux';
import { editContactAction, getSingleUserAction } from '../redux/action/actions';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateContactPage = () => {

    const { currentContact } = useSelector(state => state.contacts)

    const [state, setState] = React.useState(currentContact)

    const [errMsg, setErrMsg] = React.useState('')


    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    React.useEffect(() => {
        if (currentContact) {
            setState({ ...currentContact })
        }
    }, [currentContact])




    React.useEffect(() => {
        dispatch(getSingleUserAction(id))
    }, [dispatch, id])


    const handleChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const { name, email, phone } = state
        if (!name || !email || !phone) {
            return setErrMsg('All Fields Are Required!')
        } else {
            dispatch(editContactAction(state))
            navigate('/')
            setErrMsg('')
        }

    }


    if (Object.entries(state).length !== 0) {
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

                    <TextField onChange={handleChange} name='name' value={state.name} id="standard-basic" label="Name" variant="outlined" size="small" />
                    <TextField onChange={handleChange} name='email' value={state.email} id="standard-basic" label="Email" variant="outlined" size="small" />
                    <TextField onChange={handleChange} name='phone' value={state.phone} id="standard-basic" label="Phone" variant="outlined" size="small" />
                    <Button type="submit" variant='contained'>Edit</Button>
                </Box>
                <Box sx={{ margin: '1rem 0', color: 'red' }}>{errMsg && errMsg}</Box>
            </Layout>
        )
    }
}

export default UpdateContactPage