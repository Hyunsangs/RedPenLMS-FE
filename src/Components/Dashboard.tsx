import React from 'react';
import styled from '@emotion/styled';

import Sidebar from './Sidebar';
import CourseSetting from './CourseSetting';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <CourseSetting />
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
