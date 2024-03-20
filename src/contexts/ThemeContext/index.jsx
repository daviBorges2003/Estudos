/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Switch } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    info: {
      main: '#fff',
      light: '#fff',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    info: {
      main: '#fff',
      light: '#fff',
    },
    background:{
      default: '#ebebeb',
    }
  },
});

export default function ThemeContext({children}){

  const [theme , setTheme] = useState(lightTheme);

  const handleChange = () => {
    if(theme.palette.mode === 'light'){
      setTheme(darkTheme);
    }
    else{
      setTheme(lightTheme);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Switch sx={{
        position:'absolute',
        top: '10%',
        left: '90%',
        '& .css-julti5-MuiSwitch-root':{
          position: 'absolute'
        },
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }
      }
        onChange={handleChange} className='Switch' defaultChecked />
    </ThemeProvider>
  );
}
