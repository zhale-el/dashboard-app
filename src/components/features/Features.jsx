import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Features = () => {
  return (
    <div className="features">
      <div className="features__item">
        <span className="features__title">Revanue</span>
        <div className="features-container">
          <span className="features-container__money">$2,415</span>
          <span className="features-container__rate">
            {" "}
            -11.4
            <ArrowDownwardIcon className="features-container__icon negative" />
          </span>
        </div>
        <span className="features__subtitle">Compared to last month</span>
      </div>

      <div className="features__item">
        <span className="features__title">Sales</span>
        <div className="features-container">
          <span className="features-container__money">$4,415</span>
          <span className="features-container__rate">
            -1.4
            <ArrowDownwardIcon className="features-container__icon negative" />
          </span>
        </div>
        <span className="features__subtitle">Compared to last month</span>
      </div>

      <div className="features__item">
        <span className="features__title">Cost</span>
        <div className="features-container">
          <span className="features-container__money">$2,225</span>
          <span className="features-container__rate">
            +2.4
            <ArrowUpwardIcon className="features-container__icon" />
          </span>
        </div>
        <span className="features__subtitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default Features;
