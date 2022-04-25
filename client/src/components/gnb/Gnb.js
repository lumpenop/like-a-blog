import React from "react";
import {Profile} from "./comp/Profile";
import {Logo} from "./comp/Logo";
import './style/gnbStyle.css';

export const Gnb = () =>{
    return(

        <header>
            <nav className="gnb">
                <Logo />
                <Profile />
            </nav>
        </header>
    
    )
}

