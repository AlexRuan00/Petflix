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


    return (
        <div className="Home">
            <Banner />
            <div className='video-container'>
                {videos.map((e) => (
                    <Link to={`/video/${e._id}`} key={e._id}>
                        <VideoCard />
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Home;
