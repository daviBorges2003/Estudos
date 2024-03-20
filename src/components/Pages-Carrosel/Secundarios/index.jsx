import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Carrossel from '../../carrossel/Carrossel'
import {FetchApi} from '../../../Utils/FetchApi'
import { SwiperSlide } from 'swiper/react';
import { Typography , Card ,Button ,Stack} from '@mui/material';
import Average from '../../Averege/average'

import './styles.css';

const UrlApi = process.env.REACT_APP_API;
const KeyApi = process.env.REACT_APP_KEY;
const ApiIMG = process.env.REACT_APP_IMG;

const Secundary_Carrossel = () => {
  const [array, setArray] = useState([]);

  const Url = `${UrlApi}upcoming?${KeyApi}`

  const AsyncApi = async() => {
      const res = await FetchApi(Url);
      console.log(res.results)
      setArray(res.results);
  }

  useEffect(()=>{
    AsyncApi()
  },[]);
  

  return (
    <div style={{
      marginTop: 50,
    }}>
        <Typography variant='h5'>Upcoming Movies:</Typography>
        <Carrossel
          className='Secundary_carrossel'
          pagType={{
            type: 'bullets',
            dynamicBullets: 'true'
          }}
          navigation={true}
          perview={4}
          effect={'coverflow'}
        >
            {
              array.map((movies) => (
                <SwiperSlide key={movies.id}>
                  <Card 
                    className='Card'
                    sx={{
                      padding: 1.5,
                      width: 200,
                    }}>
                    <img
                      height={'100%'}
                      src={ApiIMG + movies.poster_path} alt={movies.title} />
                    <Stack sx={{
                      alignItems: 'center',
                    }}>
                      <Average notes={movies.vote_average}/>
                      <Link to={`/movie/${movies.id}`}><Button>Mais Informações </Button></Link>
                    </Stack>
                  </Card>
                </SwiperSlide>
              ))
            }
        </Carrossel>
    </div>
  )
}

export default Secundary_Carrossel
