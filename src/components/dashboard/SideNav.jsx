import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  MdSpaceDashboard,
  MdPendingActions,
  MdMessage,
  MdSettings,
} from 'react-icons/md';
import Logo from '../../assets/icon.png'


const defaultLinks = [
  {
    to: "/provider/dashboard/main",
    icon: MdSpaceDashboard,
    text: "Dashboard"
  },
  {
    to: "/provider/dashboard/requests",
    icon: MdPendingActions,
    text: "Clients Requests"
  },
  {
    to: "/provider/dashboard/messages",
    icon: MdMessage,
    text: "Clients Messages"
  },
  {
    to: "/provider/dashboard/settings",
    icon: MdSettings,
    text: "Settings"
  }
];

const SideNav = ({ links = defaultLinks }) => {
  return (
    <aside className="bg-2 w-[20%] absolute top-0 left-[-100%] md:left-0 h-full text-white flex flex-col items-center p-5 gap-20">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[35%] mx-auto" />
        </Link>
      </div>
      <div className="menu mt-20 self-start">
        <ul>
          {links.map(({ to, icon: Icon, text }) => (
            <li key={to} className="mb-7">
              <NavLink
                to={to}
                className="flex items-center gap-5 text-4xl hover:text-gray-200"
              >
                <Icon className="text-3xl inline" />
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;