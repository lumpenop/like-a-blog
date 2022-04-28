import React,{useState} from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const menu = ['블로그', '새 글 작성', '임시 글', '설정', '로그아웃']

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
                    {menu.map((el, i)=>{
                        return <ProfileList 
                                key={i}>{el}
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
    padding: 0.5rem 1rem;
    background-color: skyBlue;
`
const ProfileList = styled.li`
    
`