import React, {useState} from "react";
import axios from "axios";
import CoctailList from "../components/CoctailList";

const SearchPage = () => {
    const [inputDrink, setInputDrink] = useState('')
    const [search, setSearch] = useState([])

    const handleClick=()=>{
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputDrink}`)
            .then(({data})=>{
                console.log(data.drinks)
                setSearch(data.drinks)
            })
    }

    return (
        <div className={'container'}>
            <input placeholder={'Например: mojito...'} type="text" onChange={(event)=>setInputDrink(event.target.value)}/>
            <button onClick={handleClick}>Поиск</button>
            <CoctailList drinks={search}/>
        </div>
    )
}
export default SearchPage