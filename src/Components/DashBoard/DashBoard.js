import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Hook/UseAdmin'
import auth from '../../firebase.init'

const DashBoard = () => {
    const [user]=useAuthState(auth);
    const [admin]=UseAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/allorders">All Orders</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {admin && <li><Link to="/dashboard/alluser">All User</Link></li>}
                   { admin && <li><Link to="/dashboard/addnewproduct">Add New Item</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;