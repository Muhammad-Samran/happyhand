import React from "react";
import { DefaultPlayer as Video } from "react-html5video/dist";

const VideoPlayer = () => {
  return (
    <>
      <Video>
        <source src="https://www.youtube.com/embed/MJ5mE" />
      </Video>
    </>
  );
};

export default VideoPlayer;
