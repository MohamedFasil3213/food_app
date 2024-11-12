import React, { useState, useEffect } from 'react';

const MenuItemList = () => {
    const [menuItems, setMenuItems] = useState([{id:1,name:"biriyani"}]);

    // useEffect(() => {
    //     axios.get('/api/menu-items')
    //         .then(response => setMenuItems(response.data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Manage Menu Items</h2>
            <ul>
                {menuItems.map(menuItem => (
                    <li key={menuItem.id} className="p-2 border-b">
                        {menuItem.name}
                    </li>
                ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">Add Menu Item</button>
        </div>
    );
};

export default MenuItemList;
