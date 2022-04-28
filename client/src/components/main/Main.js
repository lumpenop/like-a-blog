import React from "react";
import { MainContent } from "./comp/MainContent";
import { Section, Container } from "../style";
import styled from "styled-components";

const arr = [1, 2, 3, 4, 5, 6]



export const Main = () =>{
    return(
        <Section>
            <Container>
                <MainUl>
                    {arr.map((e,i)=>{
                        return (
                            <MainContent key={i}
                                element={e}
                            />
                        )
                    })}
                </MainUl>
            </Container>
        </Section>
    )
}

const MainUl = styled.ul`

`