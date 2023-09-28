import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Toggle from 'react-toggle'
import axios from 'axios'
import Banner from '../components/Banner';
import VideoCard from '../components/VideoCard';
import { BiSolidCat } from "react-icons/bi";
import { BiSolidDog } from "react-icons/bi";
import './Home.css'


let videosSwitch = false;
function Home() {
    const [videos, setVideos] = useState([]);
    let videosForUse = []
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
            videosForUse = response.data
        })
        .catch(error => {
            console.error('Error fetching API URLs:', error);
        });
    }

    const setCatVideos = () => {
        axios.get('http://localhost:3000/cat')
        .then(response => {
            setVideos(response.data);
            videosForUse = response.data
        })
        .catch(error => {
            console.error('Error fetching API URLs:', error);
        });
    }
    const surf = () => {
        let randomNumber = Math.floor(Math.random() * videosForUse.length);
        let id = videosForUse[randomNumber]._id
        navigate(`/video/${id}`);
    }
    const teste = () => {
        videosSwitch = !videosSwitch
        console.log(videosSwitch)
        if(videosSwitch){
            setCatVideos()
            return
        }
        setDogVideos()
    }
    return (
        <div className="Home">
            <Banner />
            <div className='video-container'>
                {videos.map((e) => (
                    <Link to={`/video/${e._id}`} key={e._id}>
                        <VideoCard img={e.urlImage} />
                    </Link>
                ))}
            </div>
            <label className="floating-button">
                <Toggle
                    defaultChecked={false}
                    icons={{
                        checked: <BiSolidCat/>,
                        unchecked:<BiSolidDog/>,
                      }}

                      onChange={teste} />
            </label>
        </div>
    );
}


export default Home;
2