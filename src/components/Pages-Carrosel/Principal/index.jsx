import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import Carrossel from '../../carrossel/Carrossel'
import Average from '../../Averege/average'
import { SwiperSlide } from 'swiper/react';
import { FetchApi } from '../../../Utils/FetchApi';
import { Grid , Card, Typography, Button , Stack } from '@mui/material';

import './styles.css';

const Api = process.env.REACT_APP_API;
const KeyApi = process.env.REACT_APP_KEY;
const ApiIMG = process.env.REACT_APP_IMG;

const Principal_Carrossel = () => {
    const [topMovies , setTopMovies] = useState([]);
    const Url = `${Api}top_rated?${KeyApi}`;

    const AsyncPromise = async() =>{
      const res = await FetchApi(Url);
      setTopMovies(res.results);
    }
  
    useEffect(()=>{
      AsyncPromise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <Carrossel
      pagType={{
        type:'progressbar'
      }}
      perview={1} 
      effect={'coverflow'}>
        {
            topMovies.map((props) => (
              <SwiperSlide key={props.id}>
                <Card
                  sx={{
                    display:'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-around',
                    height: 400,
                  }}
                >
                  <Stack 
                    sx={{
                      padding: 2,
                      width: '50%',
                      height: '100%',
                    }}
                    justifyContent='space-around'
                    direction="column"
                  >
                    <Typography variant='h5'>
                      {props.title}
                    </Typography>
                    <Average notes={props.vote_average}/>
                    <p class="subtitle">
                      {props.overview}
                    </p>
                    <Link to={`/movie/${props.id}`}><Button>Mais Informações </Button></Link>
                  </Stack>
                  <Link to={`/movie/${props.id}`}>
                    <img className='imgCar' src={ApiIMG + props.backdrop_path} alt={props.title} />
                  </Link>
                </Card>
              </SwiperSlide>

            ))
        }
    </Carrossel>
  )
}

export default Principal_Carrossel