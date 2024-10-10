import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px;
    height: 60px;
    align-items: center;
    
`

export const NavBarRightContainer = styled.div`
    display: flex;
    height: 100%;
    
`
export const WebTitle = styled.div`
    height: 100%;
    font-size: 22px;
    margin-left: 20px;
    display: flex;
    align-items: center;
  
`
export const MenuTitle = styled.div`
    font-size: 12px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    :hover {
        color: blue;
    }
    cursor: pointer;
    :nth-child(2) {
        color: blue;

        :hover {
            color: black;
        }
    }
  
`