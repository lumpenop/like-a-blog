import React from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const menu = ['블로그', '새 글 작성', '임시 글', '설정', '로그아웃']
export const Profile = () =>{
    return(
        <div className="profile">
            <div>
                    <FontAwesomeIcon 
                    className="profile-moon-icon" 
                    icon={faSun} 
                    />
            </div>
            <div>
                <FontAwesomeIcon 
                    className="profile-magnifyingGlass-icon" 
                    icon={faMagnifyingGlass} />
            </div>
            <div className="profile-img-box">
                <img className="profile-img" 
                    src="images/lumpen.jpeg" 
                />
                <FontAwesomeIcon 
                    className="profile-img-icon" 
                    icon={faCaretDown} 
                />
            </div>
            <ProfileMenu>
                {menu.map((el, i)=>{
                    <ProfileList key={i}>{el}</ProfileList>
                })}
            </ProfileMenu>
        </div>
    )
}

const ProfileMenu = styled.ul`
    display: none;
`
const ProfileList = styled.li`
    
`