import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios'
import './Video.css'


function Video() {
    const { idVideo } = useParams()
    const [video, setVideo] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/videos/${idVideo}`)
            .then(response => {
                setVideo(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar URLs da API:', error);
            });
    }, []);

    console.log(video.url)
    return (
        <div className="video">
                <iframe className="iframe" src={video.url} frameborder="0"/>
        </div>
    );
}


export default Video;
