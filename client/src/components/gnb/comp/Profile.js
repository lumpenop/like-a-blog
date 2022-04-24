import React from "react";
import { Container, Div } from "../../Styled";
import styled from "styled-components";

const menu = ['블로그', '새 글 작성', '임시 글', '설정', '로그아웃']
export const Profile = () =>{
    return(
        <>
            <Container>
                <Div></Div>
                <Div></Div>
                <ul>{menu.map((el, i)=><li key={i}>{el}</li>)}</ul>
            </Container>
        </>
    )
}