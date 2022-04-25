import React from "react";
import { Container, Div, Ul, Li } from "../../Styled";
import styled from "styled-components";


const menu = ['블로그', '새 글 작성', '임시 글', '설정', '로그아웃']
export const Profile = () =>{
    return(
        <>
            <Container>
                <Div></Div>
                <Div></Div>
                <Ul>{menu.map((el, i)=><Li key={i}>{el}</Li>)}</Ul>
            </Container>
        </>
    )
}
