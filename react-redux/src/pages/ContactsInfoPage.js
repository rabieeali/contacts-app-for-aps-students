
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Button, CircularProgress } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentContact } from '../redux/actions/getContacts'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { updateContact } from '../redux/actions/updateContacts'



const ContactsInfoPage = ({ updateContact, getTheContact, currentContact, error, loading }) => {

  const { id } = useParams()

  const [updatedContact, setUpdatedContact] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const navigate = useNavigate()

  const onChange = (e) => {
    const { value, name } = e.target
    setUpdatedContact({ ...updatedContact, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(updatedContact)
    updateContact(updatedContact)
    navigate('/contacts')
  }


  useEffect(() => {
    if (currentContact) {
      setUpdatedContact({ ...currentContact })
    }
  }, [currentContact])

  useEffect(() => {
    getTheContact(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let content;


  if (loading) {
    content = (
      <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>)
  }
  if (error) {
    content = (<p>Error : {error}</p>)
  }

  if (!loading && currentContact) {
    content = (
      <Box
        onSubmit={onSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          boxShadow: 1,
          padding: '1rem'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={updatedContact.name}
          onChange={onChange}
          name='name'
          id="name"
          label="name"
          variant="outlined" />

        <TextField
          value={updatedContact.email}
          onChange={onChange}
          name='email'
          id="email"
          label="email"
          variant="outlined" />

        <TextField
          value={updatedContact.phone}
          onChange={onChange}
          name='phone'
          id="phone"
          label="phone"
          variant="outlined" />
        <Button variant='contained' type='submit'>update</Button>
      </Box>

    )
  }

  return (
    <Layout>
      <Box>
        {content}
      </Box>
    </Layout>
  )
}


const mapStateToProps = state => ({
  currentContact: state.contacts.currentContact,
  loading: state.contacts.loading,
  error: state.contacts.error
})

const mapDispatchToProps = dispatch => {
  return {
    getTheContact: (id) => {
      dispatch(getCurrentContact(id))
    },
    updateContact: (newCon) => {
      dispatch(updateContact(newCon))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactsInfoPage)