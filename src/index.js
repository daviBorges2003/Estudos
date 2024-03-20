import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './index.css';
import ThemeContext from './contexts/ThemeContext';

import Home from './Templates/Home/Home';
import Login from './Templates/Login/Login'
import Search from './Templates/Search';
import Header from './components/header/main';
import InfoMovies from './Templates/InformationMovies';

import {register} from 'swiper/element/bundle'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

register();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='movie/:id' element={<InfoMovies/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeContext>
  </React.StrictMode>
);
