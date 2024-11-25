// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSessionCheck } from '../hooks/useSessionCheck';
import Loading from 'Components/Loading';
import { CenteredWrapper } from 'Components/LoadingStyle';
interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const { data: sessionStatus, isLoading } = useSessionCheck();


  if (isLoading)
    return (
      <CenteredWrapper>
        <Loading />
      </CenteredWrapper>
    );

    if (!sessionStatus?.authenticated) {
      // 로컬 스토리지 데이터 삭제
      localStorage.removeItem('studentId');
      localStorage.removeItem('username');
      localStorage.removeItem('jobId'); // 필요하다면 다른 키도 추가로 삭제
  
      return <Navigate to="/login" replace />;
    }
  
    return <Component />;
};

export default ProtectedRoute;