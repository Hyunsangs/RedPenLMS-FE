import React from 'react';
import styled from '@emotion/styled';
import CourseSelection from './CourseSelection';
import Sidebar from './Sidebar';
import CourseSettingBox from './CourseSettingBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  overflow-y: auto;

`;

const Dashboard: React.FC = () => {

  const navigate = useNavigate();
  const [showCourseSelection, setShowCourseSelection] = useState(false)

  const handleCourseSetting = () => {
    setShowCourseSelection(!showCourseSelection);
  }

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        {/* showCourseSelection이 false일 때 CourseSettingBox 표시 */}
        {!showCourseSelection ? (
          <CourseSettingBox onCourseSetting={handleCourseSetting} />
        ) : (
          <CourseSelection onClose={() => setShowCourseSelection(false)} />
        )}
        
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
