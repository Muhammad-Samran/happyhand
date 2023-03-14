import React from "react";
import "./AntMedia.css";

const AntMedia = () => {
  return (
    <>
      <div class="television-base">
        <iframe
          src="https://live.happyhandsart.com.au:5443/WebRTCAppEE/play.html?name=wJiS6SBcz8Ot1670912472772"
          frameborder="0"
          allow="autoplay"
          controls
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default AntMedia;
