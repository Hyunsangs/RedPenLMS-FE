import React from 'react';
import styled from '@emotion/styled';
import { IoHomeSharp } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa6";
import { PiBookFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';


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

export const MenuItem = styled(Link)`
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
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    
`

export const MenuBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10%;
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
          <MenuItem to="/dashboard"><IoHomeSharp />홈</MenuItem>
          <MenuItem to="/dashboard/mysubject"><PiBookFill />과목</MenuItem>
          <MenuItem to="/dashboard/recommend"><FaRegThumbsUp />교과목 추천</MenuItem>
        </MenuMiddleContainer>
        <MenuBottomContainer>
            
          <MenuItem to="/dashboard/mypage"><FaRegAddressCard />마이페이지</MenuItem>
          <MenuItem to="/info"><IoMdInformationCircleOutline />이용안내</MenuItem>
        </MenuBottomContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
