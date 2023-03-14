import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/images/logo.png";
import "./playlist.css";

const Playlist = () => {
  return (
    <>
      {" "}
      <Card className="playlist-card">
        <Card.Body>
          <Card.Title className="playlist-title">Playlist</Card.Title>
          <Card.Text className="playlist-items d-flex flex-row ">
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
            <div className="playlist-img m-2">
              <img src={logo} width="150px" />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Playlist;
