import React from "react";
import "./dacast.css";

const DacastCard = () => {
  return (
    <>
      <div class="television-base">
        <iframe
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
          scrolling="no"
          allow="autoplay"
          frameborder="0"
          // height="330"
          // width="480"
          id="d61d5f41-402c-a352-02fe-5bf03b79f046"
          src="https://iframe.dacast.com/live/0f847825-8c20-8aba-674c-9c8ea6348767/d61d5f41-402c-a352-02fe-5bf03b79f046"
        ></iframe>
      </div>
    </>
  );
};

export default DacastCard;
