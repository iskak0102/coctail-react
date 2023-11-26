import React from "react";
import {Link} from "react-router-dom";

const CoctailCard=({drink})=>{
    return(
        <div className={'box'}>
            <img src={drink?.strDrinkThumb} alt=""/>
            <Link className={'link'} to={`/drinks/${drink?.idDrink}`}>{drink?.strDrink}</Link>
            <p>{drink?.strCategory}</p>
        </div>
    )
}
export default CoctailCard