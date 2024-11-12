import React from 'react';
import RestaurantList from '../Pages/RestaurantList/RestaurantList';
import MenuItemList from '../Pages/MenuItemList/MenuItemList';
import Layout from '../../Components/Layout/Layout';
import { useLocation } from 'react-router-dom';


const AdminDashboard = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/'); // Split the path by '/'
    const lastSegment = pathSegments[pathSegments.length - 1];
    return (
         <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <RestaurantList />
                    <MenuItemList />
                </div>
            </div>
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-bold">Admin Menu</h2>
            </div>
            <ul>
                <li className="p-4 hover:bg-gray-200">
                    <a href="/admin/restaurants">Manage Restaurants</a>
                </li>
                <li className="p-4 hover:bg-gray-200">
                    <a href="/admin/menu-items">Manage Menu Items</a>
                </li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
