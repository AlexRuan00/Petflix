import './VideoCard.css';

const VideoCard = ({img}) => {
    return (
        <div className="thumbnail">
          <img src={img} alt="Miniatura do vídeo" />
        </div>
      );
}

export default VideoCard;