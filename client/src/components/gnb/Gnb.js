import React from "react";
import {Profile} from "./comp/Profile";
import {Logo} from "./comp/Logo";
import { Container } from "../Styled";

export const Gnb = () =>{
    return(
        <>
        <Container>
            <Logo />
            <Profile />
        </Container>
        </>
    )
}

