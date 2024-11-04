import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import CourseSelection from './CourseSelection';
import CourseSettingBox from './CourseSettingBox';
import MySubject from 'Pages/MySubject';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const MainContent = styled.main`
  width: 100%;
  padding: 20px 100px;
  background-color: #e9e9e9;
  overflow-y: auto;
`;

const DashboardHome: React.FC = () => {
  const [showCourseSelection, setShowCourseSelection] = useState(false);

  const handleCourseSetting = () => {
    setShowCourseSelection(!showCourseSelection);
  };

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route
            path="/"
            element={
              !showCourseSelection ? (
                <CourseSettingBox onCourseSetting={handleCourseSetting} />
              ) : (
                <CourseSelection onClose={() => setShowCourseSelection(false)} />
              )
            }
          />
          <Route path="/mysubject" element={<MySubject />} />
          {/* 필요한 경우 추가적인 라우트 설정 */}
        </Routes>
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardHome;
