import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import IngredientList from "../components/IngredientList";

const CoctailPage = () => {
    const {idDrink} = useParams()
    const [drink, setDrink] = useState({})
    const [ingredients, setIngredients] = useState([])



    const filterIngredients = (drink) => {
        for (const key in drink) {
            if (key.startsWith('strIngredient') && drink[key] !== null && drink[key] !== "") {
                setIngredients(prev => [...prev, drink[key]])
            }
        }
    }



    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            .then(({data}) => {
                filterIngredients(data.drinks[0])
                setDrink(data.drinks[0])
            })
    }, []);



    return (

        <div className={'container'}>
            <div className="row">
                <div className="col-5">
                    <div className="box">
                        <h2>{drink.strDrink}</h2>
                        <img src={drink.strDrinkThumb} alt=""/>
                        <iframe src={`https://www.youtube.com/embed/${drink.strYouTube?.slice(drink.strYouTube.indexOf('=')+1)}`} frameBorder="0"></iframe>
                    </div>
                </div>

                <div className="col-7">
                    <div className="inner-box">
                        <h2>Ингредиенты коктейля</h2>
                        <IngredientList ingredients={ingredients} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CoctailPage