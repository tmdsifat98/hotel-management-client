import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <nav>
                <Navbar/>
            </nav>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;