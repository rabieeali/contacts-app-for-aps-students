import { Box, Button, Typography } from "@mui/material"
import { colors } from "@mui/material"
import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <>
      <Box sx={{ display: 'grid', placeItems: 'center', marginTop: '3rem' }}>
        <Typography sx={{ fontSize: '3rem', color: colors.red['500'] }} variant="h1" color="initial">
          Page Not Found
        </Typography>
        <Link to='/'>
          <Button sx={{ marginTop: '2rem', textTransform: 'capitalize' }}>
            Go Home
          </Button>
        </Link>
      </Box>
    </>

  )
}

export default NotFound