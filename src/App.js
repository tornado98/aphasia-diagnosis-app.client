import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, User_login, User_register, Not_found, User_dashbord, User_practice, User_practice_category } from './pages';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='user_register' element={<User_register/>}/>
        <Route path='use_dashbord' element={<User_dashbord/>}/>
        <Route path='user_practice' element={<User_practice/>}/>
        <Route path='user_practice_category' element={<User_practice_category/>}/>
        <Route path='user_register' element={<User_register/>}/>
        <Route path='*' element={<Not_found/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App