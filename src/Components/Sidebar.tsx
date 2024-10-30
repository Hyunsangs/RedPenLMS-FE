import React from 'react';
import styled from '@emotion/styled';
import { IoHomeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { PiBookFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #2c3e50;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 2%;
  align-items: center;
  justify-content: space-around;
`;

export const MenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  cursor: pointer;
    font-size: 22px;
  &:hover {
    opacity: 0.6;
  }
`;

export const MenuTopContainer = styled.div`
    
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MenuMiddleContainer = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    
`

export const MenuBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15%;
`

export const MenuTitle = styled.div`
  font-size: 24px;

`;

export const MenuSubTitle = styled.div`
    font-size: 14px;
    
`

export const Line = styled.hr`
    border-width: 1px;
    width: 200px;
    color: white;
    margin: 15px;
`

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
        <MenuTopContainer>
            <MenuTitle>RedPen+Lms Plus</MenuTitle>
            <MenuSubTitle> 000 님 안녕하세요. 오늘도 좋은 하루 되세요!</MenuSubTitle>
        </MenuTopContainer>
        <Line />
        <MenuMiddleContainer>
            <MenuItem><IoHomeSharp />홈</MenuItem>
            <MenuItem><FaSearch />검색</MenuItem>
            <MenuItem><GoBellFill />알림</MenuItem>
            <MenuItem><IoIosSettings />설정</MenuItem>
            <MenuItem><PiBookFill />과목</MenuItem>
        </MenuMiddleContainer>
        <MenuBottomContainer>
            
            <MenuItem><FaRegAddressCard />마이페이지</MenuItem>
            <MenuItem><IoMdInformationCircleOutline />이용안내</MenuItem>
        </MenuBottomContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
