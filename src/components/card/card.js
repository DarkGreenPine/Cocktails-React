import React from "react";
import "./card.css";

const Card = ({data}) => {

    return (
        <>
            
            <p>{data.drinks[0].strDrink}</p>
            <img src={data.drinks[0].strDrinkThumb} alt="" />

            <p>{data.drinks[0].strInstructions}</p>
            
        </>
    )
}

export default Card;