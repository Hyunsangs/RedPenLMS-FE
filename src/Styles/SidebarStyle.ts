import styled from "@emotion/styled";
import { Link } from "react-router-dom";
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

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 22px;
  background: none;
  border: none;
  color: inherit;
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
  font-weight: 800;

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