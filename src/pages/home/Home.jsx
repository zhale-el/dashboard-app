import React from "react";
import "./Home.css";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetLg from "../../components/widgetlg/WidgetLg";
import { xAxisData } from "../../Data";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} datakey="Sale" />
      <div className="home__widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
