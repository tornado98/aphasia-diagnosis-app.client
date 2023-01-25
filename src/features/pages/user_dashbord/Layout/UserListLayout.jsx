import React from 'react';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/Topnav/TopNav';
import { useGetUsersQuery } from "../../../users/usersApiSlice";
import User from './User';
 

const UserListLayout = () => {
  const {
      data: users,
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetUsersQuery(undefined, {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null 

            content = (
              <table className="table table--users">
                  <thead className="table__thead">
                      <tr>
                          <th scope="col" className="table__th user__username">Username</th>
                          <th scope="col" className="table__th user__roles">Roles</th>
                          <th scope="col" className="table__th user__edit">Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableContent}
                  </tbody>
              </table>
          )    
    }                  
  return (
    <>
    <Sidebar/>
    <div className="main">
      <div className="main__content">
        <TopNav/>
          {content}
        <Outlet/>
      </div>
    </div>
      
  </>
  )
}

export default UserListLayout