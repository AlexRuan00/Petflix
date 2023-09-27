import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios'
import './Video.css'

function Video() {
    const { idVideo } = useParams()
    const [selectedVideo, setSelectedVideo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/videos/${idVideo}`)
            .then(response => {
                setSelectedVideo(response.data);
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowUp' || event.keyCode === 38) {
                changeVideo();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const changeVideo = () => {
        axios.get('http://localhost:3000/videos')
          .then(response => {
            let randomNumber = Math.floor(Math.random() * response.data.length);
            setSelectedVideo(response.data[randomNumber])
          })
          .catch(error => {
            console.error('Error fetching API URLs:', error);
          });
    }



    useEffect(() => {
        const videoElement = document.querySelector('.iframe');
        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', () => {
                if (videoElement.requestFullscreen) {
                    videoElement.requestFullscreen();
                } else if (videoElement.mozRequestFullScreen) {
                    videoElement.mozRequestFullScreen();
                } else if (videoElement.webkitRequestFullscreen) {
                    videoElement.webkitRequestFullscreen();
                }
            });
        }

        
    }, [selectedVideo]);

    return (
        <div className="video">
            <video className="iframe" src={selectedVideo.url} autoPlay loop/>
        </div>
    );
}

export default Video;
