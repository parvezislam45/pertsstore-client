import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Nav = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  return (
    <div class="navbar bg-white sticky top-0">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            { user && (
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          )}
          </ul>

        </div>
        <h1 class="btn btn-ghost normal-case text-xl text-sky-400 nav">Phone Haven</h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 nav text-black">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          { user && (
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          )}
        </ul>
      </div>
      <div class="navbar-end">
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            {user && (
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={user.photoURL} alt='' />
              </div>
            </label>
            )}
            
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {user && (
                <li>
                  <h1 class="justify-between text-md">
                    {user.displayName}
                    <span class="badge">New</span>
                  </h1>
                </li>
              )}

              <li>Settings</li>
              {user ? (
                <li><button className="btn btn-ghost" onClick={logout}>
                  Sign Out
                </button></li>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;