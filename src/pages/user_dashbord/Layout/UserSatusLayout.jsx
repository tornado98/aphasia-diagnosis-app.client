import React from 'react';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/Topnav/TopNav'; 

const UserSatusLayout = () => {
  return (
    <>
    <Sidebar/>
    <div className="main">
      <div className="main__content">
        <TopNav/>
        <Outlet/>
      </div>
    </div>
      
  </>
  )
}

export default UserSatusLayout