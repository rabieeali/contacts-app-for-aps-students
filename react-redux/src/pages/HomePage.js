import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Layout from '../components/Layout';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction, getContactsAction } from '../redux/action/actions';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const HomePage = () => {

    const dispatch = useDispatch()

    const { loading, contacts } = useSelector(state => state.contacts)


    React.useEffect(() => {
        dispatch(getContactsAction())
    }, [dispatch])

    const handleDelete = (id) => {
        const confirmed = window.confirm('Are You Sure?')
        if (confirmed) {
            dispatch(deleteContactAction(id))
        }
    }

    if (loading) {
        return (
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Layout>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Phone</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts?.map((cont) => (
                            <StyledTableRow key={cont._id}>
                                <StyledTableCell component="th" scope="row">
                                    {cont.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{cont.email}</StyledTableCell>
                                <StyledTableCell align="center">{cont.phone}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button component={Link} to={`/update-contact/${cont._id}`} ><EditIcon /></Button>
                                    <Button onClick={() => handleDelete(cont._id)} color="error"><DeleteForeverIcon /></Button>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}

export default HomePage
