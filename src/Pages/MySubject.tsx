import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

// 스타일 정의

export const MySubjectContainer = styled.div``;
export const Line = styled.div`
    border-width: 1px;
    border-color: #adabab;
    margin-bottom: 15px;
`

export const MySubjectHeader =styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 45px 10px 20px;
    font-size: 12px;
    opacity: 0.5;
  
`

export const MySubjectTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

export const MySubjectCourseContainer = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  
`;

export const CourseContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 10px 10px;
`;

export const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CourseDetails = styled.div`
  margin-top: 10px;
  padding: 10px;
  
  border-radius: 8px;
`;

export const WeekContainer = styled.div`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
`;

export const CourseTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const CourseInfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CourseInfo = styled.div`
  font-size: 14px;
  color: #7c7c7c;
`;

/* 강의 추천 하는 부분  */

export const LectureRecommendContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const LectureRecommendTitle = styled.div`
    margin-top: 50px;
    font-size: 24px;
    font-weight: 900;
`
export const VideoBox = styled.div`
    background-color: black;
    width: 250px;
    height: 200px;
`

// 더미 데이터
const courses = [
  { id: 1, title: '자바스크립트 기초', code: 'JS101', grade: 1 },
  { id: 2, title: '리액트 패턴', code: 'RE102', grade: 2 },
  { id: 3, title: 'HTML/CSS', code: 'HTML103', grade: 1 },
];

const weeks = Array.from({ length: 15 }, (_, i) => `Week ${i + 1}`);

const MySubject: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCourse = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <MySubjectContainer>
      <MySubjectTitle>나의 교과목 강의</MySubjectTitle>
      <Line />
      <MySubjectHeader>
        <div>강의 이름</div>
        <div>과목코드 | 학점</div>
      </MySubjectHeader>
      {courses.map((course) => (
        <CourseContainer
          key={course.id}
          onClick={() => toggleCourse(course.id)}
        >
          <CourseHeader>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseInfoContainer>
              <CourseInfo>
                {course.code} | {course.grade}
              </CourseInfo>
              {expandedCourse === course.id ? (
                <IoChevronUp />
              ) : (
                <IoChevronDown />
              )}
            </CourseInfoContainer>
          </CourseHeader>
          {expandedCourse === course.id && (
            <CourseDetails>
                <Line />
              {weeks.map((week, index) => (
                <WeekContainer
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent toggling the course
                    toggleWeek(index);
                  }}
                >
                  <CourseHeader>
                    <div>{week}</div>
                    {expandedWeeks[index] ? <IoChevronUp /> : <IoChevronDown />}
                  </CourseHeader>
                  {expandedWeeks[index] && (
                    <div style={{ paddingLeft: '20px', color: '#ddd' }}>
                      {week}의 학습 내용이 여기에 표시됩니다.
                    </div>
                  )}
                </WeekContainer>
              ))}
            </CourseDetails>
          )}
        </CourseContainer>
      ))}
      <LectureRecommendTitle>강의 추천</LectureRecommendTitle>
      <Line />
      <LectureRecommendContainer>
        <VideoBox />
        <VideoBox />
        <VideoBox /> 
      </LectureRecommendContainer>
    </MySubjectContainer>
  );
};

export default MySubject;
