import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

// 스타일 정의
export const LectureRecommendContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export const HeaderBar = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 5px 0 0;
`;

export const RecommendSection = styled.div`
  margin-top: 20px;
  h2 {
    opacity: 0.5;
    margin-bottom: 10px;
  }
`;

export const CourseCard = styled.div`
  border: 1px solid #f4f4f4;
  background-color: #f4f4f4;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseTitle = styled.h3`
  font-size: 15px;
  font-weight: bold;
  color: #495057;
`;

export const DepartmentRecommend = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-top: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const Tag = styled.span`
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 15px;
  background-color: #e9f5ff;
  color: #007bff;
`;

export const DepartmentSection = styled.div`
    
  margin-top: 40px;
`;

export const DepartmentTitle = styled.h2`
  opacity: 0.5;
`;

export const DepartmentCard = styled.button`
  width: 100%;
  border: 1px solid #f4f4f4;
  background-color: #fdfdfd;
  border-radius: 12px;
  padding: 20px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;



// 강의 추천 컴포넌트 템플릿
const LectureRecommend = () => {

  const navigate = useNavigate();

  return (
    <LectureRecommendContainer>
      {/* 상단 헤더 */}
      <HeaderBar>
        <HeaderTitle>000 님의 추천 교과목 및 학과</HeaderTitle>
        <SubTitle>
          게임 소프트웨어학과, 정보 보안학과, 인공지능학과 3개를 분석하여 추천해드려요
        </SubTitle>
      </HeaderBar>

      {/* 추천 강의 섹션 */}
      <RecommendSection>
        <h2>추천 교과목</h2>
        <CourseCard>
          <CourseTitle>웹/앱 개발 필수 과목</CourseTitle>
          <DepartmentRecommend>적합 학과: 소프트웨어 개발</DepartmentRecommend>
          <TagContainer>
            <Tag>기초</Tag>
            <Tag>3학점</Tag>
            <Tag>1학년</Tag>
          </TagContainer>
        </CourseCard>
        <CourseCard>
          <CourseTitle>데이터 보안 기초</CourseTitle>
          <DepartmentRecommend>적합 학과: 정보 보안학과</DepartmentRecommend>
          <TagContainer>
            <Tag>중급</Tag>
            <Tag>3학점</Tag>
            <Tag>2학년</Tag>
          </TagContainer>
        </CourseCard>
        <CourseCard>
          <CourseTitle>스마트아이 기술 개론</CourseTitle>
          <DepartmentRecommend>적합 학과: 스마트아이학과</DepartmentRecommend>
          <TagContainer>
            <Tag>심화</Tag>
            <Tag>3학점</Tag>
            <Tag>3학년</Tag>
          </TagContainer>
        </CourseCard>
      </RecommendSection>

      {/* 학과 추천 섹션 */}
      <DepartmentSection>
        <DepartmentTitle>적합 학과 추천</DepartmentTitle>
        
        <DepartmentCard
          onClick={() => navigate('/dashboard/department_recommend')}
        >
          추천받기
        </DepartmentCard>

      </DepartmentSection>
    </LectureRecommendContainer>
  );
};

export default LectureRecommend;