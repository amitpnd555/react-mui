import { AppBar, InputBase, styled, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Search } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "felx",
    justifyContent:"space-between"
})

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: { xs: "none", sm: "block"}}}>
            REACT-MUI
            </Typography>
            <WorkOutlineIcon sx={{display: { xs: "block", sm: "none"}}} />
            <TextField id="standard-basic" label="Search...." variant="standard" />
            
        </StyledToolbar>
        </AppBar>
  )
}

export default Navbar;
