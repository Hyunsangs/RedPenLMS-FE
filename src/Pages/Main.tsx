import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'Components/Modal';
import StepForm from 'Components/StepForm';

const Main = () => {
  // 유저의 온보딩 상태를 관리하는 상태 변수
  const [isOnboarding, setIsOnboarding] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    // API 호출 등을 통해 유저의 온보딩 완료 여부를 확인한다고 가정
    setTimeout(() => {
        const userNeedsOnboarding = true; // Replace with actual logic
        if (userNeedsOnboarding) {
          setIsOnboarding(true);
        } else {
          setIsOnboarding(false);
        }
      }, 1000); // Delay to mimic fetching data
    }, []);

  // 온보딩 완료 시 호출되는 함수
  const handleOnboardingComplete = () => {
    setIsOnboarding(false); // 온보딩 상태를 완료로 변경
    navigate('/dashboard'); // 온보딩 완료 후 대시보드로 이동
  };

  return (
    <div>
      {isOnboarding ? (
        <Modal isOpen={true} onClose={() => {}}> 
          {/* 온보딩 절차가 진행 중일 때 StepForm을 모달로 표시 */}
          <StepForm onComplete={handleOnboardingComplete} />
        </Modal>
      ) : (
        <div>
             메인 데쉬보드 컨텐츠{/* 온보딩이 완료된 후 메인 대시보드 콘텐츠 표시 */} 
        </div>
      )}
    </div>
  );
};

export default Main;
