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


export default function Home() {

    return (    
        <MainContainer>
          <NavBar />
          <MainSection>
            <Section1>
              <p>컴퓨터 전공 학생들을 위한 맞춤형 <strong>학습</strong> 플랫폼</p>
              <p> 체계적인 <strong>학습 계획</strong>과 <strong>강의 추천</strong>으로</p>
              <p>성공적인 학업을 돕는 최고의 <strong>파트너!</strong></p>
              <Button width='400px' height='50px' colorScheme='blue'>시작하기</Button>
            </Section1>
          </MainSection>
          <SubSection>
              <Section2>
                <Section2Title>사이트 소개</Section2Title>
                <ExplainBoxContainer>
                  <ExplainBox>
                    <PictureBox />
                    <p>타이틀</p>
                    <p>서브 내용</p>
                  </ExplainBox>
                  <ExplainBox>
                    <PictureBox />
                    <p>타이틀</p>
                    <p>서브 내용</p>
                  </ExplainBox>
                  <ExplainBox>
                    <PictureBox />
                    <p>타이틀</p>
                    <p>서브 내용</p>
                  </ExplainBox>
                </ExplainBoxContainer>
              </Section2>
          </SubSection>
          <Footer />
        </MainContainer>
    );
}
  