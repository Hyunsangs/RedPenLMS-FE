import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { fetchRecommendedCourses } from 'Api/api';
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

  h3 {
    padding: 5px;
    color: #007bff;
  }
`;

export const CourseTitle = styled.h3`
  padding: 15px;
  font-size: 22px;
  font-weight: bold;
  color: #495057;
`;

export const DepartmentRecommend = styled.p`
  padding: 15px;
  border-radius: 12px;
  background-color: #e9e9e9;
  font-size: 15px;
  color: black;
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
  const [ recommendSchoolCourses, setRecommendSchoolCourses ] = useState<any[]>([]); // 추천 강의 데이터
  const [jobId, setJobId] = useState<number | null>(null); 
  const [ username, setUsername] = useState<string | null>(null);
  // jobId 값 가져오고 추천 데이터 요청

  useEffect(() => {
    const storedJobId = localStorage.getItem('jobId');
    const storedUsername = localStorage.getItem('username');
    if (storedJobId && storedUsername) {
      setUsername(storedUsername); // 유저네임 설정
      setJobId(Number(storedJobId)); // jobId 설정
      fetchRecommendations(Number(storedJobId)); // 추천 데이터 요청
    }

  }, []);
  const navigate = useNavigate();

   // 추천 데이터를 가져오는 함수
   const fetchRecommendations = async (id: number) => {
    try {
      const data = await fetchRecommendedCourses(id); // API 호출
      console.log(data);
      setRecommendSchoolCourses(data.recommendedCourses); // 추천 데이터 저장
    } catch (error) {
      console.error('추천 강의 데이터를 가져오는 데 실패했습니다:', error);
    }
  };


  return (
    <LectureRecommendContainer>
      {/* 상단 헤더 */}
      <HeaderBar>
        <HeaderTitle>{username}님의 추천 교과목 및 학과</HeaderTitle>
        <SubTitle>
          게임 소프트웨어학과, 정보 보안학과, 인공지능학과 3개를 분석하여 추천해드려요
        </SubTitle>
      </HeaderBar>

     {/* 추천 강의 섹션 */}
     <RecommendSection>
        <h2>추천 학교 강의</h2>
        {recommendSchoolCourses.map((course) => (
          <CourseCard key={course.course_id}>
            <CourseTitle>{course.course_name}</CourseTitle>
            <h3>강의 개요 및 목표</h3>
            <DepartmentRecommend>{course.course_details}</DepartmentRecommend>
            <TagContainer>
              <Tag>{course.grade_score}학점</Tag>
            </TagContainer>
          </CourseCard>
        ))}
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