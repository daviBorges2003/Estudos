import React, { useState ,useEffect } from 'react'
import Card from '../../components/Card-Filmes/card';
import {useSearchParams} from 'react-router-dom';
import {Container , Grid , Typography , CircularProgress} from '@mui/material';

import {FetchApi} from '../../Utils/FetchApi'

const SearhLink = process.env.REACT_APP_SEARCH;
const KeyApi = process.env.REACT_APP_KEY;


const Search = () => {

  const [searchParams] = useSearchParams();
  const [movies , setMovies] = useState([]);

  const query = searchParams.get("q")

  const SearchQueryUrl = `${SearhLink}?${KeyApi}&query=${query}`;

  const AsyncSearch = async() =>{
    const res = await FetchApi(SearchQueryUrl);
    setMovies(res.results);
  }

  useEffect(()=>{
    AsyncSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);

  return (
    <Container>
      <h2> Proucurando por... <Typography variant='h3'>{query.toUpperCase()}</Typography></h2>
      <Grid
      container spacing={{ xs: 2, md: 3 }}>
        {
          movies.length === 0 &&(<div className='loader'><CircularProgress/></div>)
        }
        {
          movies.length > 0 && movies.map((movies) => (
            <Grid  item xs={2} sm={4} md={4} key={movies.id}>
              <Card
                id={movies.id}
                img={movies.backdrop_path}
                Title={movies.title}
                notes={movies.vote_average}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Search