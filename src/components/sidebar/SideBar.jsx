import React from "react";
import "./SideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item active">
              <LineStyleIcon className="sidebar__list-icon" />
              Home
            </li>
            <li className="sidebar__list-item">
              <TimelineIcon className="sidebar__list-icon" />
              Analytics
            </li>
            <li className="sidebar__list-item">
              <TrendingUpIcon className="sidebar__list-icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__title">Quick Menu</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item active">
              <PermIdentityIcon className="sidebar__list-icon" />
              Users
            </li>
            <li className="sidebar__list-item">
              <PermIdentityIcon className="sidebar__list-icon" />
              New User
            </li>
            <li className="sidebar__list-item">
              <StorefrontIcon className="sidebar__list-icon" />
              Products
            </li>
            <li className="sidebar__list-item">
              <AttachMoneyIcon className="sidebar__list-icon" />
              Transactions
            </li>
            <li className="sidebar__list-item">
              <BarChartIcon className="sidebar__list-icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item active">
              <MailOutlineIcon className="sidebar__list-icon" />
              Mail
            </li>
            <li className="sidebar__list-item">
              <DynamicFeedIcon className="sidebar__list-icon" />
              Feedback
            </li>
            <li className="sidebar__list-item">
              <MessageOutlinedIcon className="sidebar__list-icon" />
              Message
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h3 className="sidebar__title">Staff</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item active">
              <WorkOutlineIcon className="sidebar__list-icon" />
              Manage
            </li>
            <li className="sidebar__list-item">
              <TimelineIcon className="sidebar__list-icon" />
              Analytics
            </li>
            <li className="sidebar__list-item">
              <ReportIcon className="sidebar__list-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
