import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

interface StepFormProps {
  onComplete: () => void;
}

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const MainTitle = styled.div`
  text-align: center;
  width: 700px;
  font-size: 32px;
  padding: 10px;
`;

// Emotion 스타일링된 컴포넌트 정의
export const Box = styled(motion.div)`
  width: 400px;
  padding: 20px;
  background-color: #aed8f4;
  display: flex;
  text-align: center;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
  }
`;
export const ChoiceButton = styled.button<{ selected: boolean }>`
  padding: 10px 20px;
  margin: 5px 0;
  cursor: pointer;
  border: 2px solid ${(props) => (props.selected ? '#4a90e2' : '#ffffff')};
  background-color: ${(props) => (props.selected ? '#4a90e2' : '#aed8f4')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border-radius: 8px;
  &:hover {
    background-color: #4a90e2;
    color: white;
  }
`;

// 애니메이션 효과 적용을 위한 Framer 설정
export const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const DeptButton = styled(ChoiceButton)``;

export const BoxTitle = styled.div`
  font-size: 28px;
`;

const StepForm: React.FC<StepFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [department, setDepartment] = useState<string[]>([]);
  const [grade, setGrade] = useState<number | null>(null);
  const [doubleMajor, setDoubleMajor] = useState<boolean | null>(null);

  const handleNext = () => {
    if (step === 2) {
      onComplete();
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const toggleDepartment = (dept: string) => {
    if (doubleMajor && department.includes(dept)) {
      setDepartment(department.filter((d) => d !== dept));
    } else if (doubleMajor && department.length < 2) {
      setDepartment([...department, dept]);
    } else if (!doubleMajor) {
      setDepartment([dept]);
    }
  };

  return (
    <StepFormContainer>
      <MainTitle>유현상님, LMS PLUS+에 오신 걸 환영합니다 🙌🏻</MainTitle>
      {step === 0 && (
        <Box
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={boxVariants}
          transition={{ duration: 0.5 }}
        >
          <BoxTitle>복수 전공 여부를 선택하세요</BoxTitle>
          <Row>
            <ChoiceButton
              onClick={() => setDoubleMajor(true)}
              selected={doubleMajor === true}
            >
              예
            </ChoiceButton>
            <ChoiceButton
              onClick={() => setDoubleMajor(false)}
              selected={doubleMajor === false}
            >
              아니오
            </ChoiceButton>
          </Row>
          <Row>
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext} disabled={doubleMajor === null}>
              →
            </button>
          </Row>
        </Box>
      )}
      {step === 1 && (
        <Box
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={boxVariants}
          transition={{ duration: 0.5 }}
        >
          <BoxTitle>학과를 선택하세요</BoxTitle>
          <Col>
            {['소프트웨어학과', '게임소프트웨어학과', '정보보안학과'].map(
              (dept) => (
                <DeptButton
                  key={dept}
                  onClick={() => toggleDepartment(dept)}
                  selected={department.includes(dept)}
                >
                  {dept}
                </DeptButton>
              ),
            )}
          </Col>
          <Row>
            <button onClick={handlePrev}>←</button>
            <button
              onClick={handleNext}
              disabled={
                doubleMajor ? department.length !== 2 : department.length !== 1
              }
            >
              →
            </button>
          </Row>
        </Box>
      )}
      {step === 2 && (
        <Box
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={boxVariants}
          transition={{ duration: 0.5 }}
        >
          <BoxTitle>학년을 선택해주세요</BoxTitle>
          {[1, 2, 3, 4].map((year) => (
            <DeptButton
              key={year}
              onClick={() => setGrade(year)}
              selected={grade === year}
            >
              {year}학년
            </DeptButton>
          ))}
          <Row>
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext} disabled={grade === null}>
              →
            </button>
          </Row>
        </Box>
      )}
    </StepFormContainer>
  );
};

export default StepForm;
