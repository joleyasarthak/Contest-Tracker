import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

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

const Table = ({ info }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th className="block">Contest Name</th>
            <th className="block">Start time</th>
            <th className="block">End time</th>
            <th className="block">Duration</th>
            <th className="block">Status</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
            <tr>
              <td className="blocks">
                <a href={item.url}> {item.name} </a>
              </td>
              <td className="blocks">{dateconvert(item.start_time)}</td>
              <td className="blocks">{dateconvert(item.end_time)}</td>

              <td className="blocks">{secondsToTime(item.duration)}</td>
              <td className="blocks">
                {item.status === "CODING" ? (
                  <h5 style={{ color: "green" }}>RUNNING</h5>
                ) : (
                  <h5 style={{}}>UPCOMING</h5>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
