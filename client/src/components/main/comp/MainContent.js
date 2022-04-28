import React from "react";
import { Container } from "../../style";
import styled from "styled-components";


const arr = [1, 2, 3, 4, 5, 6]


export const MainContent = ({subject, content}) =>{
    return(
        <>
            <MainContainer>
                <MainUl>
                    {arr.map((e,i)=>{
                        return( 
                            <MainLi 
                                className="main-content"
                                key={i}>
                                <ContentDiv>
                                    <h3>subject{e}</h3>
                                    <p>content{e}</p>
                                </ContentDiv>
                                <ContentDiv>by{e}</ContentDiv>
                            </MainLi> 
                        ) 
                    })}
                </MainUl>              
            </MainContainer>
        </>
    )
}

const MainContainer = styled(Container)`
    width: 90%;
    
`
const ContentDiv = styled.div`
    padding: 1rem;
`

const MainUl = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const MainLi = styled.li`
    display: inline-block;
    border-radius: 0.3em;
    background-color: white;
    flex: 1 1 40%;
    margin: 1rem;
    box-sizing: border-box;
`