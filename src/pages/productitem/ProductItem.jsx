import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import Chart from "../../components/chart/Chart";
import { productsData } from "../../Data";
import productImage from "../../assets/images/laptop.jpg";

const ProductItem = () => {
  return (
    <div className="productitem">
      <div className="productitem-container">
        <h1 className="productitem-container__title">Product</h1>
        <Link to="/newproduct">
          <button className="productitem-container__btn">Create</button>
        </Link>
      </div>

      <div className="productitem-top">
        <div className="productitem-top__left">
          <Chart
            title="Sale In This Month"
            data={productsData}
            datakey="sales"
          />
        </div>

        <div className="productitem-top__right">
          <div className="productitem-top__info">
            <img src={productImage} alt="" className="productitem__img" />
            <span className="productitem__name">Dell Laptop</span>
          </div>

          <div className="productitem-top__bottom">
            <div className="productitem__info">
              <div className="productitem__info-key">ID:</div>
              <div className="productitem__info-value">132</div>
            </div>

            <div className="productitem__info">
              <div className="productitem__info-key">Name:</div>
              <div className="productitem__info-value">Dell Laptop</div>
            </div>

            <div className="productitem__info">
              <div className="productitem__info-key">Sales:</div>
              <div className="productitem__info-value">$90000</div>
            </div>

            <div className="productitem__info">
              <div className="productitem__info-key">Active:</div>
              <div className="productitem__info-value">Yes</div>
            </div>

            <div className="productitem__info">
              <div className="productitem__info-key">In Store:</div>
              <div className="productitem__info-value">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productitem-bottom"></div>
    </div>
  );
};

export default ProductItem;
