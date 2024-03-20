/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Container from '@mui/material/Container';
import Principal_Carrossel from '../../components/Pages-Carrosel/Principal';
import Secundary_Carrossel from '../../components/Pages-Carrosel/Secundarios';

import './home.css';


const Home = () => {

  return (

    <div className='home'>
        <div className='head-home'>
          <Container
            sx={{
              paddingBottom: 5
            }}
          maxWidth="lg">
            <Principal_Carrossel/>
            <Secundary_Carrossel/>
          </Container>
        </div>
    </div>
  )
}

export default Home 