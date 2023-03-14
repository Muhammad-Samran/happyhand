import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import DacastCard from "../dacast/DacastCard";
import ZoomCard from "../zoom/ZoomCard";
import ZoomSdk from "../zoom/ZoomSdk";
import { useEffect } from "react";
import axios from "../../apis/axiosConfig";
import styles from "./styles.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Playlist from "../playlist/Playlist";
import AntMedia from "../AntMedia/AntMedia";

const StreamingView = () => {
  const [signature, setSignature] = useState();
  const [meetingData, setMeetingData] = useState();
  const [update, setUpdate] = useState(false);
  const [videoId, setVideoId] = useState();

  const resource_type = "vod";
  const embed_type = "iframe";
  const id = "ad97f547-6192-0157-c9e4-72599ba1eafe";

  useEffect(() => {
    const Player = async () => {
      try {
        const response = await axios.get(
          `/videos/${"ad97f547-6192-0157-c9e4-72599ba1eafe"}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    Player();
  }, []);

  return (
    <>
      <Header />
      <div className="streamingBody">
        <Container>
          <Row>
            <Col className="py-3 d-flex justify-content-center">
              {/* <DacastCard /> */}
              <AntMedia />
            </Col>
            {/* <Col
              className="py-3 d-flex justify-content-center align-items-center"
              md={4}
            >
              {signature && !update ? (
                <ZoomSdk
                  signature={signature}
                  data={meetingData}
                  setUpdate={setUpdate}
                />
              ) : (
                <ZoomCard
                  setSignature={setSignature}
                  setMeetingData={setMeetingData}
                  setUpdate={setUpdate}
                />
              )}
            </Col> */}
          </Row>
          <Row>
            <Col className="py-3 d-flex justify-content-center">
              {signature && !update ? (
                <ZoomSdk
                  signature={signature}
                  data={meetingData}
                  setUpdate={setUpdate}
                />
              ) : (
                <ZoomCard
                  setSignature={setSignature}
                  setMeetingData={setMeetingData}
                  setUpdate={setUpdate}
                />
              )}
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Playlist />
            </Col>
          </Row> */}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default StreamingView;
