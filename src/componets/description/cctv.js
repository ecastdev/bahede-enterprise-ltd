import * as React from 'react';
import pic from './logo_badede.jpeg';
import oil from './oilgood.jpg';
import repair from './repair.jpg';
import cctv from './cctv.jpg';
import banner from './banner.jpg';
import Financial from './finacial.jpg';
import website from './website.jpg';
import food from './foodsupply.jpg';
import electrical from './electrical.jpg';
import bussiness from './ceo.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimatio

import { Box } from '@mui/material';

export default function CCtv() {
    const data= [
        {
            descrption:'Giving the best design is our priority find us  and we will provide for you',
            picture:website,
            title:'Website design and development'
        },

        {
            descrption:'Giving the best design is our priority find us  and we will provide for you',
            picture:banner,
            title:'Banner Designing'
        },
        {
            descrption:'purchase your products from us',
            picture:oil,
            title:'Mineral buying and selling generally'
        },
        {
            descrption:'we have skilled trainers who will install your',
            picture:cctv,
            title:'cctv installation'
        },
        {
            descrption:'we here to wire for you',
            picture:electrical,
            title:'General electrical wiring installation'
        },
        {
            descrption:'tunadhika',
            picture:pic,
            title:'Tunashika tenda za Kufunga mifumo ya maji majumbani.'
        },
        {
            descrption:'get trained with us',
            picture:Financial,
            title:'Financial business'
        },
        {
            descrption:'Giving the best design is our priority find us  and we will provide for you',
            picture:food,
            title:'Food supply'
        },
    ]
    const controls = useAnimation(); // Use useAnimation hook to control animations

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0, // Change x to a valid property (e.g., 0 or any other numeric value)
      transition: { duration: 0.3, delay: 0.25 },
    });
  }, [controls]);
  return (
    <motion.div
    initial={{ opacity: 0, x: 75 }} // Change 7 to x or y to specify the direction of animation
        animate={controls} // Use controls for animation
     id='cctv' className='flex flex-col'>
        <h1  className=' text-center text-rose-900 text-clip text-2xl md:text-5xl lg:text-4xl '>
            services
        </h1>
        <p className=' text-center text-sm lg:text-2xl md:text-2xl text-white'>
            most trusted services with sklled team
        </p>
        <div className=' mt-5 lg:mt-10 grid justify-center grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-5 items-center sm:1/1    lg:gap-10'>
            {data.map((maping) =>(
            <Card sx={{  maxWidth: { xs: 300, md: 400 ,lg:400 } , bgcolor:"rgb(39, 22, 67)" }}>
            <CardActionArea>
            <img
                
                className=' h-60 w-full'
                src={maping.picture}
                alt="picture "
            />
            <CardContent>
                <Typography variant="h4" color="white">
                    {maping.title}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        ))}

        </div>
    
    </motion.div>
  );
}