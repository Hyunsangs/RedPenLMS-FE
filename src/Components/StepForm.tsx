import React, { useState, useEffect } from 'react';
import { submitStepFormData } from 'Api/api';
import { 
  Row,
  Col,
  StepFormContainer,
  MainTitle,
  Box,
  ChoiceButton,
  boxVariants,
  BoxTitle,
 } from 'Styles/StepFormStyle';
import { StepFormProps } from 'Interface/interface';
import { majors } from 'Constants/major';
import { jobOptions } from 'Constants/jobOptions';

const StepForm: React.FC<StepFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [major, setMajor] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [jobId, setJobId] = useState<number | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleNext = async () => {
    if (step === 2) {
      await submitStepFormData({ departmentId: 1, major, year, jobId });
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

  return (
    <StepFormContainer>
      <MainTitle>{username}님, LMS PLUS+에 오신 걸 환영합니다 🙌🏻</MainTitle>
      {step === 0 && (
        <Box initial="hidden" animate="visible" exit="exit" variants={boxVariants} transition={{ duration: 0.5 }}>
          <BoxTitle>전공을 선택하세요</BoxTitle>
          <Col>
            {majors.map((majorOption) => (
              <ChoiceButton
                key={majorOption}
                selected={major === majorOption}
                onClick={() => setMajor(majorOption)}
              >
                {majorOption}
              </ChoiceButton>
            ))}
          </Col>
          <Row>
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext} disabled={major === null}>→</button>
          </Row>
        </Box>
      )}
      {step === 1 && (
        <Box initial="hidden" animate="visible" exit="exit" variants={boxVariants} transition={{ duration: 0.5 }}>
          <BoxTitle>학년을 선택해주세요</BoxTitle>
          {[1, 2, 3, 4].map((yearOption) => (
            <ChoiceButton
              key={yearOption}
              onClick={() => setYear(yearOption)}
              selected={year === yearOption}
            >
              {yearOption}학년
            </ChoiceButton>
          ))}
          <Row>
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext} disabled={year === null}>→</button>
          </Row>
        </Box>
      )}
      {step === 2 && (
        <Box initial="hidden" animate="visible" exit="exit" variants={boxVariants} transition={{ duration: 0.5 }}>
          <BoxTitle>직무를 선택해주세요</BoxTitle>
          <select onChange={(e) => setJobId(Number(e.target.value))} value={jobId ?? ''}>
            <option value="">직무 선택</option>
            {jobOptions.map((job) => (
              <option key={job.id} value={job.id}>{job.name}</option>
            ))}
          </select>
          <Row>
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext} disabled={jobId === null}>완료</button>
          </Row>
        </Box>
      )}
    </StepFormContainer>
  );
};

export default StepForm;
