import React from "react";
import styled from "styled-components";



export const MainContent = ({element}) =>{
    return(
        <MainLi>
            <h3>subject{element}</h3>
            <p>content{element}</p>
            <p>2022년 4월 25일</p>
            <p>by lumpen</p>
        </MainLi>
    )
}

const MainLi = styled.li`
    display: inline-block;
    width: 50%;
    padding: 1rem;
    box-sizing: border-box;
    text-align: center;
`