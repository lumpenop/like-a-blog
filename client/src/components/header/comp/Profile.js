import React,{useState} from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const proflieMenu = [
    {menu:"내 벨로그", link:"/user"},
    {menu:"새 글 작성", link:"/write"},
    {menu:"로그아웃", link:"/logout"}
]

export const Profile = () =>{
    const [isProfileMenu, setIsProfileMenu] = useState(false);

    const clickProfile =()=>{
        isProfileMenu?setIsProfileMenu(false):setIsProfileMenu(true);
    }
    return(
        <>
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
                <div className="profile-img-box"
                    onClick={clickProfile} 
                >
                    <img className="profile-img" 
                        src="images/lumpen.jpeg" 
                        width={'2.5rem'}
                        height={'2.5rem'}
                    />
                    <FontAwesomeIcon
                        className="profile-img-icon" 
                        icon={faCaretDown} 
                    />
                </div>
                <ProfileMenu
                    isOn={isProfileMenu}
                >
                    {proflieMenu.map((el, idx)=>{
                        return <ProfileList 
                                key={idx}>
                                <Link 
                                    to={el.link} 
                                    className="link"
                                >
                                    {el.menu}
                                </Link>
                            </ProfileList>
                    })}
                </ProfileMenu>
            </div>
        </>
    )
}

const ProfileMenu = styled.ul`
    display: ${props=> props.isOn?'block':'none'};
    position: absolute;
    top: 2.8rem;
    right: 0.5rem;
    background-color: #fafafa;
    border-radius: 0.1rem;
    box-shadow: 0.05rem 0.05rem 0.5rem 0.05rem #dfdfdf;
    cursor: pointer;
    user-select: none;
`
const ProfileList = styled.li`
    padding: 0.8rem 1.6rem;
    &:hover{
        background-color: #efefef;
        border-radius: 0.1rem;
        
    }
    &:hover > a{
      color: skyBlue;  
    }
`