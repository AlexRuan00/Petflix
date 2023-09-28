import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Toggle from 'react-toggle'
import axios from 'axios'
import Banner from '../components/Banner';
import VideoCard from '../components/VideoCard';
import { BiSolidCat } from "react-icons/bi";
import { BiSolidDog } from "react-icons/bi";
import './Home.css'

let videosCatForUse = []
let videosDogForUse = []
let videosSwitch = false;
let route = '/dog'
function Home() {
    const [animal, setAnimal] = useState(false);
    const [videos, setVideos] = useState([]);
   
    const navigate = useNavigate();

    useEffect(() => {
        setDogVideos();

        const handleKeyPress = (event) => {
            if (event.key === 'ArrowUp' || event.keyCode === 38) {
                surf();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const setDogVideos = () => {
        axios.get('http://localhost:3000/dog')
            .then(response => {
                setVideos(response.data);
                videosDogForUse = response.data
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });
    }

    const setCatVideos = () => {
        axios.get('http://localhost:3000/cat')
            .then(response => {
                setVideos(response.data);
                videosCatForUse = response.data
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });
    }
    const surf = () => {
        if (videosSwitch) {
            let randomNumber = Math.floor(Math.random() * videosCatForUse.length);
            let id = videosCatForUse[randomNumber]._id
            navigate(`/cat/${id}`);
        }
        if (!videosSwitch) {
            let randomNumber = Math.floor(Math.random() * videosDogForUse.length);
            let id = videosDogForUse[randomNumber]._id
            navigate(`/dog/${id}`);
        }


    }
    const teste = () => {
        videosSwitch = !videosSwitch
        console.log(videosSwitch)
        if (videosSwitch) {
            route = '/cat'
            setAnimal(true)
            setCatVideos()
            return
        }
        route ='/dog'
        setAnimal(false)
        setDogVideos()
    }
    return (
        <div className="Home">
            <Banner />
            <div className='video-container'>
                {videos.map((e) => (
                    <Link to={`${route}/${e._id}`} key={e._id}>
                        <VideoCard img={e.urlImage} />
                    </Link>
                ))}
            </div>
            <label className="floating-button">
                <Toggle
                    defaultChecked={animal}
                    icons={{
                        checked: <BiSolidCat />,
                        unchecked: <BiSolidDog />,
                    }}

                    onChange={teste} />
            </label>
        </div>
    );
}


export default Home;
2