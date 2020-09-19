import React from "react";

// components
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos } = props;
  // loop over videos
  const renderedList = videos.map((video) => {
    console.log(video);
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
