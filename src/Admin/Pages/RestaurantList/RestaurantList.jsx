import React, { useState, useEffect } from 'react';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([{name:"Start Hotal",id:1}]);

    // useEffect(() => {
    //     axios.get('/api/restaurants')
    //         .then(response => setRestaurants(response.data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Manage Restaurants</h2>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id} className="p-2 border-b">
                        {restaurant.name}
                    </li>
                ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">Add Restaurant</button>
        </div>
    );
};

export default RestaurantList;
