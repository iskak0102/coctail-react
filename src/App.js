import React from "react";
import {Route,Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SeacrhPage";
import Header from "./components/Header";
import CoctaiLCard from "./components/CoctaiLCard"
import CoctailPage from "./Pages/CoctailPage";
import IngredientPage from "./Pages/IngredientPage";
const App =()=>{
  return(
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/drinks/:idDrink' element={<CoctailPage/>}/>
          <Route path='/ingredient/:name' element={<IngredientPage/>}/>
        </Routes>
      </>
  )
}
export default App
