import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useMyCourses } from 'hooks/useMyCourses';
import Loading from 'Components/Loading';
import { fetchInflearnLectureRecommendations } from 'Api/api';
import { useSchoolCourseCheck } from 'hooks/useSchoolCourseCheck';
import { Link } from 'react-router-dom';
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

export const LectureRecommendBox = styled.div`
  width: 100%;
  border: 1px solid #f4f4f4;
  background-color: #f4f4f4;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const SchoolLectureTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
  overflow-y: hidden;
`;

export const InflearnBox = styled.div`
  padding: 0px 10px;
`;

export const InflearnContentContainer = styled.div`
  background-color: #e9e9e9;
  padding: 10px;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 여기에 제한하고자 하는 줄 수를 입력한다. */
  -webkit-box-orient: vertical;
`;

export const VideoBox = styled.div<{ thumbnail: string }>`
  width: 100%; /* 부모 요소에 맞게 가로 크기 설정 */
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 8px;
  background-color: blue;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

// export const VideoBox = styled.div<{ thumbnail: string }>`
//   background-image: url(${(props) => props.thumbnail});
//   background-size: cover;
//   background-position: center;
//   aspect-ratio: 16 / 9; /* 가로 세로 비율 설정 */
//   width: 100%; /* 부모 요소에 맞게 가로 크기 설정 */

//   border-radius: 8px;
//   background-color: blue;
// `;

export const InflearnCourseName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const InflearnCourseDetails = styled.div`
  font-size: 14px;
`;

// SchoolCourse 타입 정의
interface SchoolCourse {
  id: number;
  schoolCourse: {
    courseId: string;
    courseName: string;
    courseDetails: string;
    gradeScore: number;
  };
}

// 추천 데이터 타입 정의
interface Recommendation {
  courseURL: string;
  imgURL: string;
  inflearnCourseName: string;
  inflearnCourseDetails: string;
}

// 가공된 추천 데이터 타입 정의
interface ProcessedRecommendation {
  schoolCourseName: string;
  schoolCourseDetails: string;
  recommendations: Recommendation[];
}

const MySubject: React.FC = () => {
  const studentId = localStorage.getItem('studentId') || '';
  const { data: coursesData = {}, isLoading, error } = useMyCourses(studentId);
  const { data: schoolCourses = [] } = useSchoolCourseCheck(studentId) as {
    data: SchoolCourse[];
  };

  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<{
    [key: number]: boolean;
  }>({});
  const [processedData, setProcessedData] = useState<ProcessedRecommendation[]>(
    [],
  );

  // 강의 토글
  const toggleCourse = (courseName: string) => {
    setExpandedCourse(expandedCourse === courseName ? null : courseName);
  };

  // 주차별 토글
  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };
  // 추천 데이터 fetch 및 가공
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (schoolCourses.length > 0) {
        try {
          const requestData = schoolCourses.map((course: any) => ({
            courseName: course.schoolCourse.courseName,
            courseDetails: course.schoolCourse.courseDetails,
          }));
          const response =
            await fetchInflearnLectureRecommendations(requestData);

          const data: ProcessedRecommendation[] = response.map((item: any) => ({
            schoolCourseName: item.input.courseName,
            schoolCourseDetails: item.input.courseDetails,
            recommendations: item.recommendations.map((rec: any) => ({
              courseURL: rec.courseURL,
              imgURL: rec.imgURL,
              inflearnCourseName: rec.inflearnCourseName,
              inflearnCourseDetails: rec.inflearnCourseDetails,
            })),
          }));

          setProcessedData(data);
        } catch (err) {
          console.error('추천 데이터를 가져오는 중 오류 발생:', err);
        }
      }
    };

    fetchRecommendations();
  }, [schoolCourses]);

  if (isLoading) return <Loading />;
  if (error) return <p>데이터를 가져오는 중 오류가 발생했습니다.</p>;

  // URL로 이동하는 함수 추가
  const handleVideoBoxClick = (url: string) => {
    if (url) {
      window.open(url, '_blank'); // 새 탭에서 URL 열기
    } else {
      console.error('URL이 존재하지 않습니다.');
    }
  };

  return (
    <MySubjectContainer>
      <MySubjectTitle>나의 교과목 강의</MySubjectTitle>
      <Line />
      <MySubjectHeader>
        <div>강의 이름</div>
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
        {processedData.map((item, index) => (
          <LectureRecommendBox key={index}>
            <SchoolLectureTitle>{item.schoolCourseName}</SchoolLectureTitle>
            <GridContainer>
              {item.recommendations.map((rec, recIndex) => (
                <InflearnBox key={recIndex}>
                  <VideoBox
                    thumbnail={rec.imgURL}
                    onClick={() => handleVideoBoxClick(rec.courseURL)}
                  />
                  <InflearnContentContainer>
                    <InflearnCourseName>
                      {rec.inflearnCourseName}
                    </InflearnCourseName>
                    <InflearnCourseDetails>
                      {rec.inflearnCourseDetails}
                    </InflearnCourseDetails>
                  </InflearnContentContainer>
                </InflearnBox>
              ))}
            </GridContainer>
          </LectureRecommendBox>
        ))}
      </LectureRecommendContainer>
    </MySubjectContainer>
  );
};

export default MySubject;
