import { PauseCircleFilledSharp, PlayArrowRounded } from '@mui/icons-material';
import { Fab } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react"; 
import useSound from "use-sound";
import { collection, getDocs } from "firebase/firestore"; 
import fstore from '../../firebase';

function Nextlist() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioUrl, setAudioUrl] = useState(""); // State to hold audio URL
    const [play, { pause }] = useSound(audioUrl);
    const [datafire, setdatafire] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(fstore, "toplist_cacious"));
            const items = querySnapshot.docs.map((doc) => doc.data());
            setdatafire(items);
            setAudioUrl(items[0]?.song_audio); // Assuming you want to play the first song
        };
        fetchData();
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            pause(); // Pause the audio
        } else {
            play(); // Play the audio
        }
        setIsPlaying(!isPlaying); // Toggle the isPlaying state
    };

    return (
        <div className='my-6 grid grid-flow-row'>
            <Typography gutterBottom variant="h5" component="div">
                Songs made for you
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Play and listen to songs in cacious music app
            </Typography>
            <div className='grid grid-cols-6 my-6 gap-5'>
                {datafire.map((musdata, index) => (
                    <div key={index} className='rounded-xl relative'>
                        <div className='absolute w-full h-full  bg-red rounded-xl text-red'>
                            {/* Your overlay content */}
                        </div>
                        <img
                            className='max-h-[160px md:max-h-[200px] w-full object-cover'
                            alt='splash copy.jpg'
                            src={musdata.song_image}
                        />
                        <div className='mx-2 absolute bottom-2'>
                            <audio controls src={musdata.song_audio}/>
                            <Fab size="small" color="primary" aria-label="add" onClick={togglePlay}>
                                {!isPlaying ? (
                                    <PlayArrowRounded />
                                ) : (
                                    <PauseCircleFilledSharp />
                                )}
                            </Fab>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nextlist;
