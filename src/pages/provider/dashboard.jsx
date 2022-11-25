import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/dashboard/TopBar';
import SideNav from '../../components/dashboard/SideNav';

const ProviderDashboard = ({user}) => {
  return (
    <div>
      <TopBar name={user.name} photoUrl={user.photoUrl} />
      <SideNav />
      <div className='absolute overflow-scroll w-[100%] md:w-[80%] right-0 w-full h-[91%] bg-gray-100 top-[9%]'>
        <Outlet />
      </div>
    </div>
  )
}

export default ProviderDashboard;