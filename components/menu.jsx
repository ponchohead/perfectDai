
/* TO do: 
1.- desapear menu when mobile 
2.-scroll down when many items*/

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import { MyCalendar } from './calendar';




export const SideMenu = ({ appName="Perfectdai"}) => {
  const [menuState, setMenuState] = useState(false)
  const [menuClass, setMenuClass] = useState('')

  const menuToogle = () => {
    setMenuState(!menuState)
    menuState ? setMenuClass('active') : setMenuClass('')
  }

  const searchToogle = () => {
    if(menuState){
      setMenuState(!menuState) 
      setMenuClass('active')
    } 
  }

  return(
    <div>
    <div className= {`sidebar ${menuClass}`}>
      <div className="logo_content">
        <div className="logo">
          <AlarmOnOutlinedIcon className="icon_i"/>
          <div className="logo_name">{appName}</div>
        </div>
        <DehazeOutlinedIcon onClick={menuToogle} className="btn"/>
      </div>
      <ul className="nav_list">
        <li>
          <a href="#">
            <SearchOutlinedIcon onClick={searchToogle} className="search_icon"/>
            <input type="text" placeholder="Search" />
          </a>
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="#">
            <DashboardOutlinedIcon className="icon_i"/>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <TodayOutlinedIcon className="icon_i"/>
            <span className="links_name">Appointments</span>
          </a>
          <span className="tooltip">Appointments</span>
        </li>
        <li>
          <a href="#">
            <SupervisorAccountOutlinedIcon className="icon_i"/>
            <span className="links_name">Employees</span>
          </a>
          <span className="tooltip">Employees</span>
        </li>
        <li>
          <a href="#">
            <AccountTreeOutlinedIcon className="icon_i"/>
            <span className="links_name">Resources</span>
          </a>
          <span className="tooltip">Resources</span>
        </li>
        <li>
          <a href="#">
            <RoomServiceOutlinedIcon className="icon_i"/>
            <span className="links_name">Services</span>
          </a>
          <span className="tooltip">Services</span>
        </li>
        <li>
          <a href="#">
            <InsertChartOutlinedRoundedIcon className="icon_i"/>
            <span className="links_name">Inventories</span>
          </a>
          <span className="tooltip">Inventories</span>
        </li>
        <li>
          <a href="#">
            <LocalOfferOutlinedIcon className="icon_i"/>
            <span className="links_name">Products</span>
          </a>
          <span className="tooltip">Products</span>
        </li>
        <li>
          <a href="#">
            <StorefrontOutlinedIcon className="icon_i"/>
            <span className="links_name">Branches</span>
          </a>
          <span className="tooltip">Branches</span>
        </li>
        <li>
          <a href="#">
            <BusinessOutlinedIcon className="icon_i"/>
            <span className="links_name">Franchisees</span>
          </a>
          <span className="tooltip">Franchisees</span>
        </li>
        <li>
          <a href="#">
            <SettingsOutlinedIcon className="icon_i"/>
            <span className="links_name">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <Image
              src={"/Alfonso_Zamudio_face.jpeg"}
              alt="Picture of the user"
              width={40}
              height={40}
              className="img_user"
            />
            <div className="name_job">
              <div className="name">Alfonso Zamudio</div>
              <div className="job">General Manager</div>
            </div>
          </div>
          <span id="log_out"><ExitToAppOutlinedIcon className="icon_i"/></span>
        </div>
      </div>
    </div>
      <div className="home_content">
        <div className="text">Home Content</div>
        <MyCalendar/>
      </div>

      

    </div>
  )
}
