import Layout from "../components/Layout"

import { connect } from "react-redux"
import { getContacts } from '../redux/actions/getContacts'
import { useEffect } from "react"


import * as React from 'react';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { colors } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


const ContactsPage = ({ getContacts, loading, contacts, error }) => {



    useEffect(() => {
        getContacts()
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    if (loading) {
        return <p>Loading ...</p>
    }
    if (error) {
        return <p>Error : {error}</p>
    }

    return (
        <Layout>
            <Typography sx={{ my: 3 }} variant="h1">
                Contacts Page
            </Typography>

            <TableContainer sx={{ margin: "3rem 0" }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: colors.orange['600'] }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts?.map((con) => (
                            <TableRow
                                key={con._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {con.name}
                                </TableCell>
                                <TableCell align="center">{con.email}</TableCell>
                                <TableCell align="center">{con.phone}</TableCell>
                                <TableCell align="center">
                                    <Button><EditIcon sx={{ color: colors.blue['700'] }} /></Button>
                                    <Button><DeleteForeverIcon sx={{ color: colors.red['700'] }} /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    )
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    loading: state.contacts.loading,
    error: state.contacts.error
})

export default connect(mapStateToProps, { getContacts })(ContactsPage)