import React from "react";
import { MainContent } from "./comp/MainContent";
import { Section } from "../style";
import './style/mainStyle.css';


export const Main = () =>{
    return(
        <>
            <Section className="main-section">
                <MainContent />
            </Section>
        </>
    )
}