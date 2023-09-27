import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import Banner from '../components/Banner';
import VideoCard from '../components/VideoCard';
import './Home.css'


function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/videos')
          .then(response => {
            setVideos(response.data); 
          })
          .catch(error => {
            console.error('Error fetching API URLs:', error);
          });
      }, []);

      useEffect(() => {
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

    const surf = () => {
        console.log('clicou')
        return (
            <Link to="/video/650c78eb064ae6e090fa44a8" >
            </Link>
          );
    }

    return (
        <div className="Home">
            <Banner />
            <div className='video-container'>
                {videos.map((e) => (
                    <Link to={`/video/${e._id}`} key={e._id}>
                        <VideoCard img={e.urlImage}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Home;
