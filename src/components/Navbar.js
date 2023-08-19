import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Navbar = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate();
    const signout = () => {
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname="/";
        })
    }
  return (
    <div className=" h-[150px] flex justify-between items-center px-40">
      <Link to="/">
        <h2 className=" font-bold text-[22px] text-black">
          Write<span className="text-blue-600">Wave</span>
        </h2>
      </Link>

      <ul className="flex gap-8">
        <li>
          <Link className="text-[16px] text-black" to="/about">
            <button className="hover:bg-blue-100 p-1 rounded-full w-20">
              about
            </button>
          </Link>
        </li>
        <li>
          <Link className="text-[16px] text-black" to="/profile">
            <button className="hover:bg-blue-100 p-1 rounded-full w-20">
              profile
            </button>
          </Link>
        </li>
        <li>
          <Link className="text-[16px] text-black" to="/blogs">
            <button className="hover:bg-blue-100 p-1 rounded-full w-20">
              blogs
            </button>
          </Link>
        </li>
        <li>
          {!isAuth ? (
            <Link className="text-[16px] font-bold" to="/login">
              <button class="rounded-full bg-blue-600 hover:bg-blue-300 w-[100px] p-1">
                login
              </button>
            </Link>
          ) :
          
          <button className="text-[16px] font-bold text-white rounded-full bg-blue-600 hover:bg-blue-300 w-[100px] p-1"
            onClick={signout}
          >
            logout
          </button>
        
          }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
