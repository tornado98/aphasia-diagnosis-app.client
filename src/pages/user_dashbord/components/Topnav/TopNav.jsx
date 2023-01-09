import React from 'react'

import './topnav.scss';

import UserInfo from '../user-info/UserInfo';

import { data } from '../../constants';

const Topnav = () => {
  return (
    <div className="topnav">
      <UserInfo user={data.user}/>
      <div className="sidebar-toggle">
        <i className="bx bx-menu-alt-left"></i>
      </div>

    </div>
  )
}

export default Topnav