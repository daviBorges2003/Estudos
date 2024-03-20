import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FetchApi } from '../../Utils/FetchApi';

import Average from '../../components/Averege/average'

import not_found from '../../imgs/not_found.jpg';

import { Container,Card,Stack , Accordion , AccordionSummary,AccordionDetails , Divider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Api = process.env.REACT_APP_API;
const KeyApi = process.env.REACT_APP_KEY;
const ApiIMG = process.env.REACT_APP_IMG;


const InfoMovies = () => {
  
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [expand , setExpand] = useState(false);

  const Url = `${Api}${id}?${KeyApi}`

  const HandleChange = (panel) => (e , isExpanded) => {
    setExpand(isExpanded ? panel : false);
  }

  const AsyncSearch = async() =>{
    const res = await FetchApi(Url);
    setMovie(res);
  }

  useEffect(()=>{
    AsyncSearch()
  },[]);
  return (
    <div>
      <Container>
        {
          movie && (
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-around'
                spacing={5}
                sx={{
                  height: '100%',
                  width: '100%',
                  paddingTop: 10,
                }}
                key={movie.id}>
                <Card sx={{
                  width:'100%',
                  maxWidth: 400,
                  height: '100%',
                  padding: 1,
                }}>
                  <img src={ApiIMG + movie.poster_path} alt="" />
                  {
                    !movie.poster_path &&(
                      <img src={not_found} alt='image not found'/>
                    )
                  }
                </Card>
                <Card
                  sx={{
                    height: '100%',
                    padding: 2,
                  }}
                >
                  <h1>{movie.title}</h1>
                  <Average notes={movie.vote_average}/>
                  <p>{movie.overview}</p>
                  <Accordion expanded={expand === 'panel1'} onChange={HandleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                      Genres belonging
                    </AccordionSummary>
                    {
                      movie.genres.map((genres) => (
                         <>
                            <Divider/>
                            <AccordionDetails key={genres.id}>
                                {genres.name}
                            </AccordionDetails>
                         </>
                      ) )
                    }
                  </Accordion>
                  <Accordion expanded={expand === 'panel2'} onChange={HandleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                      Companies Productions
                    </AccordionSummary>
                    {
                      movie.production_companies.map((companies) => (
                         <>
                          <Divider/>
                          <AccordionDetails key={companies.id}>
                              {companies.name}
                          </AccordionDetails>
                         </>
                      ) )
                    }
                  </Accordion>
                </Card>
              </Stack>

          )
        }
      </Container>  
    </div>
  )
}

export default InfoMovies