import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'Components/Modal';
import StepForm from 'Components/StepForm';
import DashboardHome from 'Components/DashboardHome';
import { useUserSettingsCheck } from 'hooks/useUserSettingsCheck';
import { useSessionCheck } from 'hooks/useSessionCheck';

interface MainProps {
  studentId: string;
}

const Main: React.FC<MainProps> = ({studentId}) => {
  
  const [showStepForm, setShowStepForm] = useState(() => {
    return localStorage.getItem("showStepForm") === "true";
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!studentId){
      localStorage.getItem("studentId");
    }
  }, []);

  
  // 세션 확인
  const { data: sessionStatus, isLoading: isSessionLoading } = useSessionCheck();
  // 사용자 학년,학과,직무 설정 확인
  const { data: userSettings, isLoading: isSettingsLoading } = useUserSettingsCheck(studentId);

  // 세션이 유효하지 않을 경우 로그인 페이지로 이동
  useEffect(() => {
    if (!isSessionLoading && sessionStatus?.authenticated === false) {
      console.log("세션 없음, 로그인 페이지로 이동");
      navigate('/login');
    }
  }, [isSessionLoading, sessionStatus, navigate]);

  // 사용자 학년,학과,직무 완료되지 않았을 경우 모달 표시
  useEffect(() => {
    
    if (!isSettingsLoading && userSettings === false) {
      setShowStepForm(true);
      localStorage.setItem("showStepForm", "true"); // Persist StepForm display state
    }
  }, [isSettingsLoading, userSettings]);

  const handleOnboardingComplete = () => {
    setShowStepForm(false);
    localStorage.removeItem("showStepForm"); 
    alert('설정이 완료 되었습니다.');
    navigate('/dashboard');
  };

  return (
    <div>
      { showStepForm ? (
        <Modal isOpen={showStepForm} onClose={() => setShowStepForm(false)}>
          <StepForm onComplete={handleOnboardingComplete} />
        </Modal>
      ) : (
        <DashboardHome studentId={studentId} />
      )}
    </div>
  );
};

export default Main;
