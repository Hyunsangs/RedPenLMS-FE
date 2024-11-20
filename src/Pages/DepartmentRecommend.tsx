import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import confetti from 'canvas-confetti';
import { fetchRecommendedCourses } from 'Api/api'; // 추천 강의 API 호출 함수
export const DepartmentRecommendContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SurveyBoxTitle = styled.h1`
  font-size: 26px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const SurveyBox = styled.div`
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
`;

export const ChoiceDepartmentButton = styled.button<{ selected: boolean }>`
  padding: 12px 25px;
  margin: 15px 0;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.selected ? '#4a90e2' : '#e0e4e8')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  font-weight: bold;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  &:hover {
    background-color: #4a90e2;
    color: white;
    transform: scale(1.05);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ResultContainer = styled.div`
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  div {
    background-color: #c6e2fa;
    h1 {
      font-size: 42px;
      padding: 10px;
      border-radius: 12px; 
    }
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 250px;
  }
`

const questions = [
  'Q1. 가장 흥미로운 활동을 선택하세요.',
  'Q2. 가장 배우고 싶은 기술은 무엇인가요?',
  'Q3. 가장 선호하는 작업 환경은 무엇인가요?',
  'Q4. 가장 매력적으로 느껴지는 직무는 무엇인가요?',
  'Q5. 어떤 성격 유형이 당신과 가장 가까운가요?',
  'Q6. 가장 도전하고 싶은 문제는 무엇인가요?',
  'Q7. 학습할 때 가장 즐거운 부분은 무엇인가요?',
  'Q8. 어떤 작업을 즐기시나요?',
  'Q9. 다른 사람들과 협업할 때 선호하는 역할은 무엇인가요?',
  'Q10. 최종적으로 이루고 싶은 목표는?',
];

const options = [
  ['게임 개발/웹 개발', '네트워크 및 시스템 보호', '데이터 분석 및 모델 설계'],
  [
    'Unity, Unreal 게임 엔진',
    '네트워크 보안 및 암호화 기술',
    '머신러닝 및 딥러닝 알고리즘',
  ],
  [
    '창의적인 프로젝트와 협업',
    '안전하고 안정적인 시스템 관리',
    '데이터 기반의 문제 해결',
  ],
  ['개발자', '보안 엔지니어', 'AI 데이터 과학자'],
  [
    '창의적이고 모험적인 성격',
    '논리적이고 분석적인 성격',
    '세심하고 규칙적인 성격',
  ],
  [
    '재미있는 콘텐츠나 게임 만들기',
    '시스템 취약점 찾고 해결',
    '데이터를 통한 새로운 가치 발견',
  ],
  [
    '결과물이 눈에 보이는 프로젝트',
    '시스템 문제 해결 과정',
    '데이터와 패턴을 분석하는 과정',
  ],
  [
    '창의적인 아이디어로 게임 및 웹 개발',
    '해킹 시뮬레이션 및 보안 강화',
    '데이터를 분석하고 트렌드 예측',
  ],
  ['아이디어 제안과 설계', '문제 탐지와 해결', '데이터 처리 및 분석'],
  [
    '인기 있는 게임/웹 제작',
    '사이버 공격 방지 및 보안 강화',
    'AI 기술을 통한 혁신적 가치 창출',
  ],
];

const DepartmentRecommend = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));
  const [result, setResult] = useState<string | null>(null);
  const [recommendedCourses, setRecommendedCourses] = useState<string[]>([]); // 추천 강의 상태

  useEffect(() => {
    if (result) {
      confetti({
        particleCount: 300,
        spread: 80,
        origin: { x: 0.6 ,y: 0.6 },
      });
    }
  }, [result]);

  const handleSelect = (index: number) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[step] = index;
      return updatedAnswers;
    });
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const scores = { game: 0, security: 0, ai: 0 };
    answers.forEach((answer) => {
      if (answer === 0) scores.game += 1;
      else if (answer === 1) scores.security += 1;
      else if (answer === 2) scores.ai += 1;
    });
    const maxScore = Math.max(scores.game, scores.security, scores.ai);
    if (scores.game === maxScore) setResult('게임소프트웨어학과');
    else if (scores.security === maxScore) setResult('정보보안학과');
    else if (scores.ai === maxScore) setResult('인공지능학과');
  };

  const isOptionSelected = (index: number) => answers[step] === index;

  return (
    <DepartmentRecommendContainer>
      <SurveyBox>
        {!result ? (
          <>
            <SurveyBoxTitle>{questions[step]}</SurveyBoxTitle>
            <SelectionContainer>
              {options[step].map((option, index) => (
                <ChoiceDepartmentButton
                  key={index}
                  selected={isOptionSelected(index)}
                  onClick={() => handleSelect(index)}
                >
                  {option}
                </ChoiceDepartmentButton>
              ))}
            </SelectionContainer>
            <ButtonContainer>
              <button onClick={handlePrev} disabled={step === 0}>
                ←
              </button>
              <button onClick={handleNext} disabled={answers[step] === -1}>
                {step === questions.length - 1 ? '완료' : '→'}
              </button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <SurveyBoxTitle>결과를 안내해드릴게요 🥳</SurveyBoxTitle>
            <ResultContainer>
              <h2>당신에게 추천드리는 학과는...</h2>
              <div>
                <h1>{result}</h1>
              </div>
            </ResultContainer>
          </>
        )}
      </SurveyBox>
    </DepartmentRecommendContainer>
  );
};

export default DepartmentRecommend;