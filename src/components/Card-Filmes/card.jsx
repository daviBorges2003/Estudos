import React from 'react'
import Average from '../Averege/average';
import { Link } from 'react-router-dom';
import { Paper, Stack , Typography ,Button} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import './card.css'

const ImgApi = process.env.REACT_APP_IMG;

const Card = ({img,Title, id, notes}) => {

  const UrlImg = ImgApi + img;

  return (
    <Paper
      className='Paper'
      sx={{
        width: 300,
        gap: 10,
      }}
      elevation={3}>
      {
        img &&(<img src={UrlImg} alt={Title} />)
      }
      {
        !img &&(
          <div style={{
            width: 300,
            height: 170,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
            backgroundColor: '#ebebeb'
          }}>
            <ErrorIcon/>
            <Typography variant='caption'>
              image not found
            </Typography>
          </div>
        )
      }

        <Stack
          justifyContent='space-around'
          alignItems='center'
          textAlign='center'
        >
          <Typography variant='h6'>
            {Title}
          </Typography>
          <Average notes={notes}/>
          <Link
            to={`/movie/${id}`}
            ><Button sx={{width: '100%'}}>Saiba Mais</Button>
          </Link>
        </Stack>

    </Paper>
  )
}

export default Card