import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/icon.png'
import {
  MdSpaceDashboard,
  MdPendingActions,
  MdMessage,
  MdSettings,
} from 'react-icons/md'

const SideNav = () => {
  return (
    <aside className="bg-2 w-[20%] absolute top-0 left-[-100%] md:left-0 h-full text-white flex flex-col items-center p-5 gap-20">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[35%] mx-auto" />
        </Link>
      </div>
      <div className="menu mt-20 self-start">
        <ul>
          <li className="mb-7">
            <NavLink
              to="/provider/dashboard/main"
              className="flex items-center gap-5 text-4xl hover:text-gray-200"
            >
              <MdSpaceDashboard className="text-3xl inline" />
              Dashboard
            </NavLink>
          </li>
          <li className="mb-7">
            <NavLink
              to="/provider/dashboard/requests"
              className="flex items-center gap-5 text-4xl hover:text-gray-200"
            >
              <MdPendingActions className="text-3xl inline" />
              Clients Requests
            </NavLink>
          </li>
          <li className="mb-7">
            <NavLink
              to="/provider/dashboard/messages"
              className="flex items-center gap-5 text-4xl hover:text-gray-200"
            >
              <MdMessage className="text-3xl inline" />
              Clients Messages
            </NavLink>
          </li>
          <li className="mb-7">
            <NavLink
              to="/provider/dashboard/settings"
              className="flex items-center gap-5 text-4xl hover:text-gray-200"
            >
              <MdSettings className="text-3xl inline" />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideNav;
