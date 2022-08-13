import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import Card from "../card/card";

const Search = () => {

    const [data, setData] = useState(null);
    const [drink, setDrink] = useState('');
    const [ingredientList, setIngredientList] = ([]);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

    const searchDrink = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                console.log(response.data)
                setData(response.data)
            })

            setDrink('')
        }
    }
    return (
        <>
        <div className="search">
            <input 
                value={drink}
                onChange={event => setDrink(event.target.value)}
                onKeyPress={searchDrink}
                placeholder="Enter Drink"
                type="text" />
        </div>
        <div>
            {data ? <Card data={data}/> : null}
        </div>
        </>
    )
}

export default Search;