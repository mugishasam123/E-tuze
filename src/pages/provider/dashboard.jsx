import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/dashboard/TopBar';
import SideNav from '../../components/dashboard/SideNav';

const ProviderDashboard = () => {
  return (
    <div className=''>
      <TopBar />
      <SideNav />
      <div className='absolute w-[100%] md:w-[75%] right-0 w-full bg-green-400 top-[9%]'>
        <h1>Provider Dashboard</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default ProviderDashboard;