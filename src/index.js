// import React, { useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// import Typography from '@mui/material/Typography';
// import { animate, useMotionTemplate, useMotionValue } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39, 22, 67)',
    },
    secondary: {
      main: 'rgb(135, 14, 62)',
    },
    mytheme: {
      main: 'rgb(39, 22, 67)',
    },
    gre: {
      main: 'rgb(7, 97, 28)',
    },
    
  },
  // typography:{
  //   h1:{
  //     color: 'white',
  //     fontStyle: 'italic',
  //     fontWeight: 500,
  //         fontSize: '1.2rem',
  //     '@media (min-width:600px)': {
  //       fontSize: '1.5rem',
  //     },
  //     [theme.breakpoints.up('md')]: {
  //       fontSize: '2rem',
  //     },

  //   }
  // }
});
theme.typography.h1 = {
  fontSize: '3.5rem',
  fontWeight: 'bold',
  color: 'white',
  '@media (min-width:600px)': {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
};
theme.typography.h3 = {
  fontSize: '1.1rem',
  color: 'white',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};
theme.typography.h4 = {
  fontSize: '0.9rem',
  color: 'rgb(213, 130, 181)',
  fontWeight: "2px",
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  
};

theme.typography.h5 = {
  fontSize: '1.2rem',
  color: 'white',
  fontWeight: "2px",
  '@media (min-width:600px)': {
    fontSize: '1.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  
};
// image responsive 
theme.img = {
  height: '90',
  '@media (min-width:600px)': {
    fontSize: '1.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}
// const COLORS =['rgb(71, 8, 48), rgb(77, 5, 43)'];
// const color = useMotionValue(COLORS[0]);
// const backgroundImage = useMotionTemplate(' linear-gradient(to right, rgb(20, 4, 43),rgb(0, 0, 0)), ${color}');
// useEffect( ()=>{
//   animate(color, COLORS, {
//     ease: 'easeInOut',
//     duration: 10,
//     repeat: Infinity,
//     repeatType: "mirror"
//   })
// }, [])
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>

         <App />
      </ThemeProvider>
     
    </React.StrictMode>
);


reportWebVitals();
