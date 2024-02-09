import React from "react";
import "./single.css";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import {singleUser} from "../../data"

function Single(props) {
  return (
    <>
      <div className="single">
        <div className="view">
          <div className="info">
            <div className="topInfo">
              {props.img && (
                <img src={props.img} alt="" className="singleImg" />
              )}
              <h1 className="singleheading">{props.title}</h1>
              <button>Update</button>
            </div>
            <div className="details">
              {Object.entries(props.info).map((item) => (
                <div className="itemm" key={item[0]}>
                  <span className="itemTitles">{item[0]}</span>
                  <span className="itemValue">{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {props.chart && (
            <div className="singleChart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={props.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props.chart.dataKeys.map((dta) => (
                    <Line
                      type="monotone"
                      dataKey={dta.name}
                      stroke={dta.color}
                      activeDot={{ r: 8 }}
                    />
                  ))}

                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <div className="activities">
          <h2>Latest Activities</h2>
          {props.activities && (
            <ul>
              {props.activities.map((activity) => (
                <li className="li" key={activity.text}>
                  <div className="activitiesDiv">
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Single;
