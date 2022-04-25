import React from "react";
import { Container } from "../../style";
import styled from "styled-components";

const arr = [1, 2, 3, 4, 5, 6]

const mock = [
    {subject: arr},
    {content: arr}
]
export const MainContent = ({subject, content}) =>{
    return(
        <>
            <Container>
                {mock.map((e,i)=>{
                    return( 
                        <div key={i}>
                            <h3>{e.subject}</h3>
                            <p>{e.content}</p>
                        </div> 
                    ) 
                })}              
            </Container>
        </>
    )
}

const MainUl = styled.ul`

`
const MainLi = styled.li`
`