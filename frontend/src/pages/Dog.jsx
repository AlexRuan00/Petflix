import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Dog.css'

function Dog() {
    let videos = [];
    let currentVideo;
    const navigate = useNavigate();
    const { idVideo } = useParams()
    const [selectedVideo, setSelectedVideo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/videos/${idVideo}`)
            .then(response => {
                setSelectedVideo(response.data);
                currentVideo = response.data;
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });

        axios.get('http://localhost:3000/dog')
            .then(response => {
                videos = response.data
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });

        const handleKeyPress = (event) => {
            if (event.key === 'ArrowDown' || event.keyCode === 40) {
                previousVideo();
            }
            if (event.key === 'ArrowUp' || event.keyCode === 38) {
                nextVideo();
            }
            if (event.key === '1' || event.keyCode === 97) {
                backToHome();
            }
            
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);



    const nextVideo = () => {
        for (let i = 0; i < videos.length; i++) {
            const e = videos[i];
            if (e._id === currentVideo._id){
                setSelectedVideo(videos[i+1]);
                currentVideo = videos[i+1];
                if (i === videos.length -1){
                    setSelectedVideo(videos[0])
                    currentVideo = videos[0];
                }
                break;
            }
        }
    }

    const previousVideo = () => {
        for (let i = 0; i < videos.length; i++) {
            const e = videos[i];
            if (e._id === currentVideo._id){
                setSelectedVideo(videos[i-1]);
                currentVideo = videos[i-1];
                if (i === 0){
                    setSelectedVideo(videos[videos.length -1])
                    currentVideo = videos[videos.length -1];
                }
                break;
            }
        }
    }

    const backToHome = () => {
        navigate(`/`);
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
            <video className="iframe" src={selectedVideo.url} autoPlay loop />
        </div>
    );
}

export default Dog;
