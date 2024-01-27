import { useState } from "react";
import { auth } from "../../utils/firebase";

import { MdMenu,MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user=auth.currentUser;
  const navigate = useNavigate();

  const handleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`${isMenuOpen?'fixed space-y-44 shadow-xl z-50 left-0 top-0 bottom-0 right-0 bg-gray-200 h-full p-12' :'md:flex md:justify-between items-center  shadow-lg px-10 py-3'}  `}>
     <div className="flex justify-between items-center">
   
      <a className="flex items-center "onClick={()=>setIsMenuOpen(false)} href="#">
        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
        <span className="text-color text-3xl">E-Tuze</span>
      </a>
      {isMenuOpen && <MdClose className="text-5xl text-color" onClick={handleMenu} />}
      {!isMenuOpen&& <MdMenu
        className="flex md:hidden text-6xl text-color"
        onClick={handleMenu }
      />}
     </div>
        <ul className={` ${
          isMenuOpen? "flex flex-col space-y-12" : "hidden items-center space-x-16 md:flex "
        }   `}>
          <li onClick={()=>setIsMenuOpen(false)}>
            <a
              className="text-3xl font-semibold tracking-wider text-color"
              href="#works"
            >
              How It works
            </a>
          </li>

          <li onClick={()=>setIsMenuOpen(false)}>
            <a
              className="text-3xl font-semibold tracking-wider text-color"
              href="#providers"
            >
              Join Our Network
            </a>
          </li>

          <li onClick={()=>setIsMenuOpen(false)}>
            {user ? <></> : (
            <button
              className="text-3xl font-semibold tracking-wider text-color"
              onClick={() => navigate("/client/login")}
            >
              Log In
            </button>)

}
          </li>

          <li onClick={()=>setIsMenuOpen(false)}>
            <button
              className="text-3xl font-semibold tracking-wider px-6 py-4 rounded-xl  btn"
              onClick={()=>navigate('/get-started')}
            >
              Get Started
            </button>
          </li>
        </ul>
     
    </div>
  );
};

export default NavBar;
