import React, { useState } from "react";
import "./zoom.css";
import { Field, Form } from "formik";
import * as Yup from "yup";
import { Formik } from "formik";
import Card from "react-bootstrap/Card";
import zoomlogo from "../../assets/images/zoomlogo.png";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const ZoomCard = ({ setSignature, setMeetingData, setUpdate }) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
  };
  const zoomSchema = Yup.object({
    name: Yup.string().required("Please provide your Full Name."),
    email: Yup.string().email().required("Please provide your Email."),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(
        // "https://frozen-tundra-17691.herokuapp.com/",
        "https://live.happyhandsart.com.au/api/v1/zoom_meeting",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          meetingNumber: "5070989575",
          role: 0,
        }
      );
      setSignature(res?.data?.signature);
      setMeetingData(values);
      setUpdate(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Card className="zoomCard">
        <Card.Body>
          <div className="logo text-center">
            <img className="logo-img" src={zoomlogo} />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={zoomSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit} className="zoomForm">
                <Row className="zoomRow">
                  <Col>
                    {" "}
                    <Field
                      className="zoomField"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </Col>
                </Row>
                <Row className="zoomRow">
                  <Col>
                    {" "}
                    <Field
                      className="zoomField"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </Col>
                </Row>
                <Row className="zoomRow">
                  <Col>
                    {" "}
                    <button
                      disabled={loading}
                      className="btn btn-primary join-btn"
                      type="submit"
                    >
                      {loading ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        "Join Meeting"
                      )}
                    </button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </>
  );
};

export default ZoomCard;
