import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, User_register, User_dashbord, User_practice_category, User_practice, Not_found, User_dashboard_request, User_dashboard_practice, User_dashboard_list, User_dashboard_status, User_dashboard_seting } from './pages';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='user_register' element={<User_register/>}/>
        <Route path='user_dashbord' element={<User_dashbord/>}/>
        <Route path='user_practice' element={<User_practice/>}/>
        <Route path='user_practice_category' element={<User_practice_category/>}/>
        <Route path='user_dashboard_practice' element={<User_dashboard_practice/>}/>
        <Route path='user_dashboard_list' element={<User_dashboard_list/>}/>
        <Route path='user_dashboard_status' element={<User_dashboard_status/>} />
        <Route path='user_dashboard_seting' element={<User_dashboard_seting/>}/>
        <Route path='user_register' element={<User_register/>}/>
        <Route path='user_dashboard_request' element={<User_dashboard_request/>}/>
        <Route path='*' element={<Not_found/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App