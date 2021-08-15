import React from 'react'
import Link from 'next/link'
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import AlarmOnOutlinedIcon from '@material-ui/icons/AlarmOnOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const SideMenu = ({ appName="Perfectdai"}) => {
  return(
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <AlarmOnOutlinedIcon />
          <div className="logo_name">{appName}</div>
        </div>
        <DehazeOutlinedIcon />
      </div>
      <ul className="nav_list">
        <li>
          <a href="#">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search" />
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <DashboardOutlinedIcon />
            <span className="links_name">Dashboard</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <TodayOutlinedIcon />
            <span className="links_name">Appointments</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <SupervisorAccountOutlinedIcon />
            <span className="links_name">Employees</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <AccountTreeOutlinedIcon />
            <span className="links_name">Resources</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <RoomServiceOutlinedIcon />
            <span className="links_name">Services</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <InsertChartOutlinedRoundedIcon />
            <span className="links_name">Inventories</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <LocalOfferOutlinedIcon />
            <span className="links_name">Products</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <StorefrontOutlinedIcon />
            <span className="links_name">Branches</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <BusinessOutlinedIcon />
            <span className="links_name">Franchisees</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <SettingsOutlinedIcon />
            <span className="links_name">Settings</span>
          </a>
          {/* <span class="tooltip">Dashboard</span> */}
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <AccountCircleOutlinedIcon />
            <div className="name_job">
              <div className="name">Alfonso Zamudio</div>
              <div className="job">General Manager</div>
            </div>
            <span id="log_out"><ExitToAppOutlinedIcon /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
