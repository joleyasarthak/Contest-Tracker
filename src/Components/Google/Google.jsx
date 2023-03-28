import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import axios from "axios";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import LinkIcon from "@material-ui/icons/Link";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Google = () => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://kontests.net/api/v1/kick_start")
      .then((resp) => {
        setinfo(resp.data);
      })
      .catch((e) => {
        console.log("error");
      });
  }, []);

  const dateconvert = (e) => {
    var s = new Date(e).toLocaleString(undefined, { timeZone: "Asia/Kolkata" });
    return s;
  };

  const secondsToTime = (sec) => {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;

    min.toString().length == 1 ? (min = "0" + min) : void 0;
    sec.toString().length == 1 ? (sec = "0" + sec) : void 0;

    return hours + ":" + min + ":" + sec;
  };

  return (
    <div className="google">
      <h1>Google Contest List😢</h1>
      <Table info={info} />
    </div>
  );
};

export default Google;
