import {CDN_URL} from "../utils/constants";
import React from "react";
import  ReactDOM  from "react";


const RestaurantCard = (props) => {
    const {restData} = props;

    const {cloudinaryImageId, name, 
        cuisines, 
        avgRating, 
        deliveryTime,} = restData?.data;

    return (

        <div className="res-card">
            <img alt="res-logo" className="rest-card-img" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;