import React, { useState } from "react";
import ReactDOM from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [newRestList, updateNewRestList] = useState([ 
    {
      "data": {
        "id": "57557",
        "name": "The Red Box",
        "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
        "costForTwo": "₹250 for two",
        "cuisines": ["Chinese"],
        "avgRating": 4.2,
        "deliveryTime": "24",
      }
    },
    {
      "data": {
        "id": "57556",
        "name": "KFC",
        "cloudinaryImageId": "5a148e63e9c54942e37627da1aa156be",
        "costForTwo": "₹300 for two",
        "cuisines": ["Salads",
        "Snacks",
        "Desserts",
        "Beverages"],
        "avgRating": 4.1,
        "deliveryTime": "24",
      }
    },
    {
      "data": {
        "id": "57589",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "costForTwo": "₹450 for two",
        "cuisines": ["Pizzas"],
        "avgRating": 3.9,
        "deliveryTime": "24",
      }
    }
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = newRestList.filter(
              (res) => res.data.avgRating > 4
            );
            updateNewRestList(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-card-container">
        {newRestList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
         ))}
      </div>
    </div>
  );
};

export default Body;
