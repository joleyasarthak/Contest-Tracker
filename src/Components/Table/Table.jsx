import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

// const info = [
//   {
//     name: "Starters 87",
//     url: "https://www.codechef.com/START87",
//     start_time: "2023-04-26 14:30:00 UTC",
//     end_time: "2023-04-26 17:30:00 UTC",
//     duration: "10800",
//     in_24_hours: "No",
//     status: "BEFORE",
//   },
//   {
//     name: "Starters 86",
//     url: "https://www.codechef.com/START86",
//     start_time: "2023-04-19 14:30:00 UTC",
//     end_time: "2023-04-19 17:30:00 UTC",
//     duration: "10800",
//     in_24_hours: "No",
//     status: "BEFORE",
//   },
//   {
//     name: "Starters 85",
//     url: "https://www.codechef.com/START85",
//     start_time: "2023-04-12 14:30:00 UTC",
//     end_time: "2023-04-12 17:30:00 UTC",
//     duration: "10800",
//     in_24_hours: "No",
//     status: "BEFORE",
//   },
//   {
//     name: "INSOMNIA",
//     url: "https://www.codechef.com/INSO2023",
//     start_time: "2023-04-08 16:30:00 UTC",
//     end_time: "2023-04-09 00:30:00 UTC",
//     duration: "28800",
//     in_24_hours: "No",
//     status: "BEFORE",
//   },
//   {
//     name: "Starters 84",
//     url: "https://www.codechef.com/START84",
//     start_time: "2023-04-05 14:30:00 UTC",
//     end_time: "2023-04-05 17:30:00 UTC",
//     duration: "10800",
//     in_24_hours: "No",
//     status: "BEFORE",
//   },
//   {
//     name: "Starters 83",
//     url: "https://www.codechef.com/START83",
//     start_time: "2023-03-29 14:30:00 UTC",
//     end_time: "2023-03-29 17:30:00 UTC",
//     duration: "10800",
//     in_24_hours: "No",
//     status: "BEFORE",
//   },
// ];

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
      <table className="container">
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
              <td className="block">
                <a href={item.url}> {item.name} </a>
              </td>
              <td className="block">{dateconvert(item.start_time)}</td>
              <td className="block">{dateconvert(item.end_time)}</td>

              <td className="block">{secondsToTime(item.duration)}</td>
              <td className="block">
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
