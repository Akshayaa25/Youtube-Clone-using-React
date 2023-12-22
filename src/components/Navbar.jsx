import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack direction='row' alignItems='center' sx={{ color: 'white',position: 'sticky', background: '#000', 
  top: 0, justifyContent: 'space-between', height: '10vh', p: '0 20px', zIndex: 999}}>
    <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar