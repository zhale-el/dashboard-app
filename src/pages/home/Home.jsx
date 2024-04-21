import React from "react";
import "./Home.css";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import xAxisData from "../../Data";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} datakey="Sale" />
    </div>
  );
};

export default Home;
