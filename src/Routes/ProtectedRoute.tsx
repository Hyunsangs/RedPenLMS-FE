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

  return sessionStatus?.authenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;