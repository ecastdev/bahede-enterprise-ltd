import { Menu, Phone, X } from "@mui/icons-material";
import { useState } from "react";
import logo from './logo_badede.jpeg'
import { FacebookRounded, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

function Nav(){
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

    // const [active, setActive] = useState(nav[0].label);
    const nav = [
        {
            listNma :'Home',
            label:"#"
        },
        {
            listNma :'Services',
            label:"#cctv"
        },
        {
            listNma :'About',
            label : '#foot'
        },
        {
            listNma :'Contact',
            label : '#contact'
        },
    ];
    const [mobileOpen, setMobileOpen] = useState(false);
    const toogleNav = ()=>{
        setMobileOpen(!mobileOpen);

    }
    return(
        <nav className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm ">
                <div className=" flex  justify-between items-center ">
                    <div className=" flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2 rounded-2xl" src={logo} alt="logo"/>
                    </div>
                    <ul className=" hidden lg:flex ml-14 space-x-12">
                        {nav.map((items, index) =>(
                            <li className=" hover:bg-gradient-to-r from-rose-900 to-rose-400" key={index}>
                                    <a  key={items.label} className="text-white text-2xl"
                                     href={items.label} >{items.listNma}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-row space-x-6"> 
                        <YouTube color="secondary" onClick={YouTube1}/>
                        <Instagram color="secondary" onClick={Instagram1}/>
                        <FacebookRounded color="secondary" onClick={facebook1}/>
                        <WhatsApp color="secondary" onClick={facebook1}/>
                        <Twitter color="secondary" onClick={WhatsApp1}/>
                    </div>
                </div>
                
                <div className=" lg:hidden md:flex justify-end flex-col">
                    <button onClick={toogleNav} className=" bg-gradient-to-r from-rose-900 to-rose-400">
                        {mobileOpen ?  <X/> : <Menu/> }
                    </button>

                </div>
                {mobileOpen && (
                    <div className="fixed right-0 z-20 bg-gradient-to-r from-rose-900 to-rose-400 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {nav.map((item, index) => (
                                <li key={index} className="py-4 ">
                                    <a className=" text-black text-2xl" href={item.label} > {item.listNma}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex space-x-0 items-center">
                    <p className="text-white "> <Phone color="secondary"/> +255752969288</p>
                    <p className="text-white "> <Phone color="secondary"/>+255674539916</p>
                </div>

            </div>
        </nav>
    )

}
export default  Nav;