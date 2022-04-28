import React from "react";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const Logo =() =>{
    return(
        <div className="logo">
            <div>
                <FontAwesomeIcon className="logo-icon" icon={faB} />
            </div>
            <div>blog</div>
        </div>

    )
}