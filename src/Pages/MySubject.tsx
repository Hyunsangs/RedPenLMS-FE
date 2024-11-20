import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useMyCourses } from 'hooks/useMyCourses';
import Loading from 'Components/Loading';

// 스타일 정의

export const MySubjectContainer = styled.div``;
export const Line = styled.div`
  border-width: 1px;
  border-color: #adabab;
  margin-bottom: 15px;
`;

export const MySubjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 45px 10px 20px;
  font-size: 12px;
  opacity: 0.5;
`;

export const MySubjectTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

export const MySubjectCourseContainer = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
`;

export const CourseContainer = styled.div<{ isExpanded: boolean }>`
  border: 1px solid grey;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0px;
  cursor: pointer;
  border-radius: 10px 10px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  background-color: ${({ isExpanded }) => (isExpanded ? '#e0e0e0' : '#f4f4f4')};

  &:hover {
    background-color: ${({ isExpanded }) =>
      isExpanded ? '#e0e0e0' : '#cfcfcf'};
  }
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

export const WeekContainer = styled.div<{ isExpanded: boolean }>`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  background-color: ${({ isExpanded }) => (isExpanded ? '#e0e0e0' : 'white')};

  &:hover {
    background-color: ${({ isExpanded }) =>
      isExpanded ? '#e0e0e0' : '#f5f5f5'};
    transform: scale(1.01); /* 버튼 확대 효과 */
  }
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
  margin-top: 50px;
`;

export const LectureRecommendTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

export const LectureVideoContainer = styled.div`
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

export const LectureTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

export const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 10px;
`;

export const VideoBox = styled.div`
  background-color: black;
  aspect-ratio: 16 / 9; /* 가로 세로 비율 설정 */
  width: 100%; /* 부모 요소에 맞게 가로 크기 설정 */
  max-width: 350px; /* 최대 가로 크기 제한 */
`;

const MySubject: React.FC = () => {
  const studentId = localStorage.getItem('studentId') || '';
  const { data: coursesData = {}, isLoading, error } = useMyCourses(studentId);
  console.log(coursesData);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCourse = (courseName: string) => {
    setExpandedCourse(expandedCourse === courseName ? null : courseName);
  };

  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  if (isLoading) return <Loading />;
  if (error) return <p>데이터를 가져오는 중 오류가 발생했습니다.</p>;

  return (
    <MySubjectContainer>
      <MySubjectTitle>나의 교과목 강의</MySubjectTitle>
      <Line />
      <MySubjectHeader>
        <div>강의 이름</div>
        <div>과목코드 | 학점</div>
      </MySubjectHeader>
      {Object.entries(coursesData).map(([courseName, weeks]) => (
        <CourseContainer
          key={courseName}
          onClick={() => toggleCourse(courseName)}
          isExpanded={expandedCourse === courseName}
        >
          <CourseHeader>
            <CourseTitle>{courseName}</CourseTitle>
            {expandedCourse === courseName ? (
              <IoChevronUp />
            ) : (
              <IoChevronDown />
            )}
          </CourseHeader>
          {expandedCourse === courseName && (
            <CourseDetails>
              {weeks.map((week) => (
                <WeekContainer
                  key={week.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWeek(week.week);
                  }}
                  isExpanded={expandedWeeks[week.week]}
                >
                  <CourseHeader>
                    <div>{`Week ${week.week}`}</div>
                    {expandedWeeks[week.week] ? (
                      <IoChevronUp />
                    ) : (
                      <IoChevronDown />
                    )}
                  </CourseHeader>
                  {expandedWeeks[week.week] && (
                    <div style={{ paddingLeft: '20px', color: '#000000' }}>
                      {week.weeklyContent}
                    </div>
                  )}
                </WeekContainer>
              ))}
            </CourseDetails>
          )}
        </CourseContainer>
      ))}
      <LectureRecommendContainer>
        <LectureRecommendTitle>강의 추천</LectureRecommendTitle>
        <Line />
        {Object.entries(coursesData).map(([courseName, weeks]) => (
          <LectureVideoContainer key={courseName}>
            <LectureTitle>{courseName}</LectureTitle>
            <VideoContainer>
              <VideoBox />
              <VideoBox />
              <VideoBox />
            </VideoContainer>
          </LectureVideoContainer>
        ))}
      </LectureRecommendContainer>
    </MySubjectContainer>
  );
};

export default MySubject;
