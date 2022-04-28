import React from "react";
import { BoardHeader } from "./comp/BoardHeader";
import { Content } from "./comp/Content";


export const Board = () =>{
    return(
        <section>
            <BoardHeader />
            <Content />
        </section>
    )
}