// StepForm.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
interface StepFormProps {
  onComplete: () => void;
}

export const StepFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

// Emotion 스타일링된 컴포넌트 정의
const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
`;

// 애니메이션 효과 적용을 위한 Framer 설정
const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const StepForm: React.FC<StepFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const steps = [
    { title: '학과 선택', content: '학과를 선택하세요.' },
    { title: '학년 선택', content: '학년을 선택하세요.' }
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <StepFormContainer>
        <Box
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={boxVariants}
            transition={{ duration: 0.5}}
        >
        <h2>{steps[step].title}</h2>
        <p>{steps[step].content}</p>
        <button onClick={handleNextStep}>다음</button>
        </Box>
    </StepFormContainer>
  );
};

export default StepForm;
