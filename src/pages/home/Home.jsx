import React from "react";
import "./home.css";
import TopBox from "../../components/topBox/TopBox";
import ChatBox from "../../components/chatBox/ChatBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

function Home() {
  return (
    <>
      <div className="home">
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2">
          <ChatBox {...chartBoxUser} />
        </div>
        <div className="box box3">
          <ChatBox {...chartBoxProduct} />
        </div>
        <div className="box box4">
          <PieChartBox />
        </div>
        <div className="box box5">
          <ChatBox {...chartBoxConversion} />
        </div>
        <div className="box box6">
          <ChatBox {...chartBoxRevenue} />
        </div>
        <div className="box box7">
          <BigChartBox />
        </div>
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </>
  );
}

export default Home;
