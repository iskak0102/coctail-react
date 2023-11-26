import React from "react";
import {Link} from "react-router-dom";

const IngredientList = ({ingredients}) => {
    return (
        <div className={'row'}>
            {
                ingredients.map((ingredients, idx) =>
                    <div className={'col-4'} key={idx + ingredients}>
                        <div className="inner-box">
                            <h5><Link className={'boxLink'} to={`/ingredient/${ingredients}`}>{ingredients}</Link></h5>
                            <Link to={`/ingredient/${ingredients}`}> <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredients}.png`} alt=""/></Link>
                        </div>

                    </div>
                )
            }

        </div>
    )

}
export default IngredientList