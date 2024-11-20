import React, {useState, useEffect} from 'react';

import { 
  SidebarContainer,
  MenuItem,
  LogoutButton,
  MenuTopContainer,
  MenuMiddleContainer,
  MenuBottomContainer,
  MenuTitle,
  MenuSubTitle,
  Line,
} from 'Styles/SidebarStyle';
import { IoHomeSharp } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa6";
import { PiBookFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'hooks/useAuth';


const Sidebar: React.FC = () => {
  const { mutate: logout} = useLogoutMutation();
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleLogout = async () => {
    logout(); // 실제 로그아웃 요청 실행
    localStorage.removeItem('studentId');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <SidebarContainer>
        <MenuTopContainer>
            <MenuTitle>LMS+AI</MenuTitle>
            <MenuSubTitle> {username} 님 안녕하세요. 오늘도 좋은 하루 되세요!</MenuSubTitle>
        </MenuTopContainer>
        <Line />
        <MenuMiddleContainer>
          <MenuItem to="/dashboard"><IoHomeSharp />홈</MenuItem>
          <MenuItem to="/dashboard/my_subject"><PiBookFill />과목</MenuItem>
          <MenuItem to="/dashboard/lecture_recommend"><FaRegThumbsUp />교과목 추천</MenuItem>
        </MenuMiddleContainer>
        <MenuBottomContainer>
            
          <MenuItem to="/dashboard/my_page"><FaRegAddressCard />마이페이지</MenuItem>
          <LogoutButton onClick={handleLogout}>
            <IoLogOutOutline />로그아웃
          </LogoutButton>
        </MenuBottomContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
