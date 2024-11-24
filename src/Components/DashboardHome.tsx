import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import CourseSelection from './CourseSelection';
import CourseSettingBox from './CourseSettingBox';
import MySubject from 'Pages/MySubject';
import LectureRecommend from 'Pages/LectureRecommend';
import Mypage from 'Pages/Mypage';
import DepartmentRecommend from 'Pages/DepartmentRecommend';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MainContent = styled.main`
  width: 100%;
  padding: 20px 100px;
  background-color: #e9e9e9;
  overflow-y: auto;
  overflow-x: hidden;
`;

interface DashboardHomeProps {
  studentId : string;
};


const DashboardHome: React.FC<DashboardHomeProps> = ({ studentId} ) => {
  const navigate = useNavigate();

  const handleCourseSetting = () => {
    navigate('/dashboard/school_setting'); // 설정 페이지로 이동
  };

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Routes>
        <Route path="/" element={<CourseSettingBox studentId={studentId} onCourseSetting={handleCourseSetting} />} />            
          <Route path="/my_subject" element={<MySubject />} />
          <Route path='/lecture_recommend' element={<LectureRecommend />} />
          <Route path="/school_setting" element={<CourseSelection /> }  />
          <Route path='/my_page' element={<Mypage />} />
          <Route path='/department_recommend' element={<DepartmentRecommend />} />
        </Routes>
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardHome;
