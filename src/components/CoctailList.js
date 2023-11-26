import React from "react";
import CoctaiLCard from "./CoctaiLCard";

const CoctailList=({drinks})=>{
    return(
        <div className={'row'}>
            {
                drinks.map(drink=>
                    <div key={drink.idDrink} className={'col-3'}>
                        <CoctaiLCard drink={drink}/>
                    </div>
                )
            }
        </div>
    )
}
export default CoctailList