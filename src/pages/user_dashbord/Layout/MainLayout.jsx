import React from 'react';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/Topnav/TopNav'; 
import Dashboard from '../pages/Dashboard';
export const MainLayout = () => {
  return (
    <>
      <Sidebar/>
      <div className="main">
        <div className="main__content">
          <TopNav/>
          <Outlet/>
          <Dashboard/>
        </div>
      </div>
        
    </>
  )
}


export default MainLayout