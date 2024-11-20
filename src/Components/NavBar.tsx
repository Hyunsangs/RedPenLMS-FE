// Home.tsx 에 최 상단 메뉴바
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
    MenuTitle,
    NavbarContainer,
    NavBarRightContainer,
    WebTitle,

} from "Styles/NavBarStyle";

export default function NavBar() {
    const navigate = useNavigate();

    
    return (
        <NavbarContainer>
            <WebTitle>LMS+AI</WebTitle>
            <NavBarRightContainer>
                <MenuTitle onClick={() => navigate('/login')}>로그인</MenuTitle>
                <MenuTitle onClick={() => navigate('/register')}>회원가입</MenuTitle>
            </NavBarRightContainer>
            
        </NavbarContainer>
    )
}