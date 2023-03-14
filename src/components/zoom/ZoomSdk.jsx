import React, { useEffect } from "react";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

const ZoomSdk = ({ signature, data, setUpdate }) => {
  const client = ZoomMtgEmbedded.createClient();
  var sdkKey = "iwVvncOBWw5iLsX85TbqRIr45U0zwkiDxJUy";
  var registrantToken = "";

  let isMeeting = document.getElementsByClassName("react-draggable");
  console.log("isMeeting", isMeeting.length);
  console.log("data", data);
  if (!signature && isMeeting.length == 0) {
    setUpdate(true);
  }

  useEffect(() => {
    try {
      let meetingSDKElement = document.getElementById("meetingSDKElement");

      client.init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        language: "en-US",
        customize: {
          meetingInfo: [
            "topic",
            "host",
            "mn",
            "pwd",
            "telPwd",
            "invite",
            "participant",
            "dc",
            "enctype",
          ],
          toolbar: {
            buttons: [
              {
                text: "Custom Button",
                className: "CustomButton",
                onClick: () => {
                  console.log("custom button");
                },
              },
            ],
          },
        },
      });

      client.join({
        sdkKey: sdkKey,
        signature: signature,
        meetingNumber: "5070989575",
        password: data.password,
        userName: data.name,
        userEmail: data.email,
        tk: registrantToken,
      });
    } catch (e) {
      console.log("error", e);
    }
  });

  return <div id="meetingSDKElement" />;
};

export default ZoomSdk;
