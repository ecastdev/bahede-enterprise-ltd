
import { useEffect } from 'react';
import './App.css';
import CCtv from './componets/description/cctv';
import Intro from './componets/intro/intro';
import { animate, useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import Next from './componets/description/food';
import Nav from './componets/navbar/nav';
import { Divider } from '@mui/material';
import Form from './componets/form/form';
import Chatroom from './componets/chatroom/chatroom';

function App() {
//   const COLORS =['rgb(71, 8, 48), rgb(77, 5, 43)'];
// const color = useMotionValue(COLORS[0]);
// const backgroundImage = useMotionTemplate("linear-gradient(right, rgb(34, 8, 71),rgb(0, 0, 0), +  {color})");
// useEffect( ()=>{
//   animate(color, COLORS, {
//     ease: 'easeInOut',
//     duration: 10,
//     repeat: Infinity,
//     repeatType: "mirror"
//   })
// }, []) 
  return (
    <div  className="App  ">
      <Nav/>
      {/* <DrawerAppBar/> */}
      <motion.div 
      // variants={{
      //   hidden:{opacity: 0, 7: 75},
      //   vis:{opacity: 1, 7: 0},
      // } }
      // initial={{opacity: 0, 7: 75}}
      // animate={{opacity: 1, 7: 0}}
      // transition={{duration: 0.3, delay: 0.25}}
     >
      <div className=" flex flex-col gap-6 items-center ">
          <Intro/>
          <Divider/>
          <CCtv/>
          {/* form submision */}
          <div className=' lg:flex-row lg:justify-between  items-center md:gap-20 sm:gap-5   lg:gap-40 md:flex sm:flex-col '>
            <Chatroom/>
            <Form/>
          </div>
          <Next/>

      </div>
        
      </motion.div>
      
      
    </div>
  );
}

export default App;
