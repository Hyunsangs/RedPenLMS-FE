// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSessionCheck } from '../hooks/useSessionCheck';

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const { data: sessionStatus, isLoading } = useSessionCheck();


  if (isLoading) return <div>로딩 중...</div>;

  return sessionStatus?.authenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;