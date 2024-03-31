import { Email,  FacebookRounded, Instagram, MarkChatRead, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { motion } from "framer-motion";
import './food.css';

function Next(){
    // facebook
    const facebook1 = () => {
        
        window.open('hhttps://www.facebook.com/share/VtnjR8TKBobAqDpX/?mibextid=qi2Omg');

 }
 // you 
 const YouTube1 = () => {
   
    window.open('https://youtube.com/@chawassaonlinetv3739?si=57SSnvY12y2bSlCf');
    
}// what's 
const WhatsApp1 = () => {
    
    window.open('https://x.com/BOSSY34230116?t=zAdfzpprSvp8tdwhIoXX3A&s=09');
  };

// insta
const Instagram1 = () => {
    window.open('https://www.instagram.com/badehe_enterprises_ltd?igsh=Z3kzbDc5OXRicjVr', '_blank');
  };


    const data = [
        {
            content:"Mineral Quering",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:" Banner designing ",
            socialmedia:  <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"website designing  ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Bussiness Card ",
            socialmedia:  <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Cctv installation ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Cctv installation ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Poster design ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Network Instlaation ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Network installation",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Advertisement Design ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Bussiness Card ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"cv making ",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Bussiness calendar",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Food supply",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Food supply",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
        {
            content:"Tunafunga mifumo ya maji majumbani & Nyumba za biashara Hotel lodge",
            socialmedia: <MarkChatRead color="secondary"/>,
            description:' we design for you and produce  and we receive payments after the work is done '
        },
    ]
    return(
        
        <>
         <motion.div 
      // variants={{
      //   hidden:{opacity: 0, 7: 75},
      //   vis:{opacity: 1, 7: 0},
      // } } 
      
    //   initial={{opacity: 0, 7: 75}}
    //   animate={{opacity: 1, 7: 0}}
    //   transition={{duration: 0.3, delay: 0.25}}
             id="foot"
             className=' 
             sm:flex-col lg:flex-row place-content-center  items-center  ' >
                <div className="relative mt-20 min-h-[800px}">
                    <div className=" text-center">
                        <span className="  text-rose-600 h-6 rounded-full text-md font-medium px2 py-0 uppercase">
                            Feature
                        </span>
                        <h1 className=" text-3xl sm:text-5xl lg:text-6xl mt-0 lg:mt-10 -tracking-wide text-white">
                            Find the best <span className="bg-gradient-to-r from-rose-900 to-rose-400 bg-clip-text text-transparent"> {" "} services</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap mt-10 lg:mt-20">
                        {data.map((feat ,index) =>(
                            <div key={index} className="w-full sm:1/2 lg:w-1/3 ">
                                    <div className=" flex">
                                        <div className=" flex mx-6  h-10 w-10 p-2 text-rose-900 justify-center items-center rounded-full">
                                            {feat.socialmedia}
                                        </div>
                                        <div>
                                            <h5 className="mt-1 mb-6 text-xl lg:text-2xl  text-white">  {feat.content}</h5>
                                            <p className="text-md text-orange-500 p-2">
                                                {feat.description}
                                            </p>
                                        </div>
                                    </div>
                                

                            </div>
                        ))}

                    </div>

                </div>
                
                
                <div id="contact" className="flex flex-col gap-5 my-6 items-center relative bg-black w-full h-auto place-content-center">
                    <h1 className="text-2xl text-center text-white place-content-center">
                        Find us on
                    </h1>
                    <p className="text-sm lg:text-xl md:text-xl text-white"> <Email color="secondary"/>  badeheenterprisesltd@gmail.com</p>
                    <p className="text-sm lg:text-xl md:text-xl text-white"> <AddLocationIcon color="secondary"/> Mwanza Tanzania </p>
                    
                    <div className="flex-row space-x-6"> 
                        <YouTube color="secondary" onClick={YouTube1}/>
                        <Instagram color="secondary" onClick={Instagram1}/>
                        <FacebookRounded color="secondary" onClick={facebook1}/>
                        <WhatsApp color="secondary" onClick={facebook1}/>
                        <Twitter color="secondary" onClick={WhatsApp1}/>
                    </div>
                    <h1 className="text-2sm text-center text-white place-content-center">
                        website design and created by cacious system 
                        <span className="text-1xl text-center text-orange-600  mb-40   place-content-center"> mtawaliecast@gmail.com</span>
                    </h1>
                    

                </div>
                
                  
        </motion.div>
    
        </>
    );

}

export default Next;