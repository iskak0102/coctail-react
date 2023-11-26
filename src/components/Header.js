import React from "react";
import {Link} from "react-router-dom";


const Header = ()=>{
    return(
        <header>
            <nav>
                <Link className={'nav_title'} to={'/'}>Домой</Link>
                <Link className={'nav_title'} to={'/search'}>Найти коктейль</Link>
            </nav>
        </header>
    )
}
export default Header