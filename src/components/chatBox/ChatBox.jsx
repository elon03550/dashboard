import React from "react";
import "./chatBox.css";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

// type Props = {
//   color: string,
//   icon: string,
//   title: string,
//   dataKey: string,
//   number: string,
//   percentage: string,
//   chartData: object[],
// };

function ChatBox(props) {
  return (
    <>
      <div className="chatBox">
        <div className="boxInfo">
          <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link to="/" className="chatBoxLink" style={{ color: props.color }}>
            View All
          </Link>
        </div>

        <div className="charInfo">
          <div className="chat">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 60 }}
                />

                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts">
            <span
              className="percentage"
              style={{ color: props.percentage < 0 ? "red" : "limegreen" }}
            >
              {props.percentage}
            </span>
            <span className="duration">this month</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
