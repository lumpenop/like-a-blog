import React from "react";
import {Profile} from "./comp/Profile";
import {Logo} from "./comp/Logo";
import './style/gnbStyle.css';
import { Outlet } from 'react-router-dom';

export const Gnb = () =>{
    return(
        <div>
            <header>
                <nav className="gnb">
                    <Logo />
                    <Profile />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

