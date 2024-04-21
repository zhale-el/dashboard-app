import React from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";

const Chart = ({ title, data, datakey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="rgb(56, 69, 106)" />
          <Line type="monotone" dataKey={datakey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray={10} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
