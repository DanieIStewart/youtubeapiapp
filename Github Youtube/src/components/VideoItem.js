import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  const { video } = props;
  return (
    <div
      onClick={() => props.onVideoSelect(video)}
      className="video-item item "
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
