// CourseSetting 이거는
// 만약 Home에서 사용자가 2학기 수강과목을 설정을 하지 않았을 때 보여야함.
// 만약 설정을 하였다면 설정한 모습이 Home 바로 보이도록 설정.

import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';

export const CourseSettingContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`;


export const CourseSettingBox = styled.div`
  width: 100%;
  height: 60%;
  background-color: #2c3e50;
  margin-top: 2%;
  border: 3px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    color: white;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  h2 {
    color: white;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const BannerBox = styled.div`
    
    width: 100%;
    height: 38%;
    background-image: url('/img/bannerImg1.png');
    border: 3px solid grey;
    border-radius: 10px;
    background-size: cover;
    background-position: center;


`

const CourseSetting: React.FC = () => {
  return (
    <CourseSettingContainer>
        <BannerBox></BannerBox>
        <CourseSettingBox>
            <h1>2024년 2학기 수강하는 과목이 없습니다.</h1>
            <h2>수강 과목을 설정하세요!</h2>
            <Button width='300px' height='50px' colorScheme='blue'>시작하기</Button>
        </CourseSettingBox>
    </CourseSettingContainer>
  );
};

export default CourseSetting;
