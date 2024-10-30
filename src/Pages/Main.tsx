import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'Components/Modal';
import StepForm from 'Components/StepForm';
import Dashboard from 'Components/Dashboard';

const Main = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const userNeedsOnboarding = true;
      setIsOnboarding(userNeedsOnboarding);
    }, 1000);
  }, []);

  const handleOnboardingComplete = () => {
    setIsOnboarding(false);
    setIsModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <div>
      {isOnboarding && isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <StepForm onComplete={handleOnboardingComplete} />
        </Modal>
      ) : (
        <div>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default Main;