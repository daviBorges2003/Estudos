import React, { useState } from 'react'
import './styles.css'
import AppBar from '@mui/material/AppBar';

import {Toolbar , IconButton ,TextField , Box,Container} from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';

import {useNavigate , Link} from 'react-router-dom';


const Header = () => {
  const [search , setSearch] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("")
  }
  
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Container maxWidth='xm'>
          <Toolbar sx={{
            justifyContent: 'space-between'
          }}>
            <IconButton>
              <Link className="LinkPrinc" to='/'><MovieIcon/></Link>
            </IconButton>
            <form action={handleClick}>
              <IconButton color='info' variant='contained' type='submit' onClick={handleClick}>
                <SearchIcon/>
              </IconButton>
              <TextField
                id='Input-Search'
                onChange={(e) => setSearch(e.target.value)} value={search} label="Search..." type="search" size='small' color='info' variant='outlined' focused
              />
            </form>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header