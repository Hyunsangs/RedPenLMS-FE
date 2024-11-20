import NavBar from 'Components/NavBar';
import React from 'react';  
import Footer from 'Components/Footer';

import {
  ExplainBox,
  ExplainBoxContainer,
  MainContainer, 
  MainSection,
  PictureBox,
  Section1,
  Section2,
  Section2Title,
  SubSection,
} from 'Styles/HomeStyle';
import { 
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <NavBar />
      <MainSection>
        <Section1>
          <p>소프트웨어공학부 학생들을 위한 </p>
          <p><strong>"맞춤형 LMS 플랫폼"</strong></p>
          <p>희망 직무를 바탕으로 교과목과 강의 <strong>"추천"</strong></p>
          <p>성공적인 학업을 돕는 최고의 <strong>파트너</strong></p>
          <Button onClick={() => navigate('/login')} width="400px" height="50px" colorScheme="blue">시작하기</Button>
        </Section1>
      </MainSection>
      <SubSection>
        <Section2>
          
          <ExplainBoxContainer>
            <ExplainBox>
              <PictureBox imageUrl="/img/HomeIntroduce1.jpg" />
              <h1>직무 설정</h1>
              <p>학생이 관심 있는 직무를 선택합니다.</p>
            </ExplainBox>
            <ExplainBox>
              <PictureBox imageUrl="/img/HomeIntroduce2.jpg" />
              <h1>교과목 추천</h1>
              <p>선택한 직무를 기반으로 교과목을 추천합니다.</p>
            </ExplainBox>
            <ExplainBox>
              <PictureBox imageUrl="/img/HomeIntroduce3.jpg" />
              <h1>강의 추천</h1>
              <p>선택한 교과목을 기반으로 강의를 추천합니다.</p>
            </ExplainBox>
          </ExplainBoxContainer>
        </Section2>
      </SubSection>
      <Footer />
    </MainContainer>
  );
}
  