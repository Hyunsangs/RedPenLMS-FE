import {
  CourseSettingContainer,
  CourseSettingBox,
  BannerBox,
  CourseBox,
  CourseInfo,
  CourseName,
  CourseDetails,
  ButtonContainer,
  NoneCourseSettingBox, 
} from 'Styles/CourseSettingBoxStyle';
import React from 'react';
import { Button} from '@chakra-ui/react';
import { CourseSettingBoxProps } from 'Interface/interface';
import { useSchoolCourseCheck } from 'hooks/useSchoolCourseCheck';
import { UserCourse } from 'Interface/interface';
import { useNavigate } from 'react-router-dom';

const CourseSetting: React.FC<CourseSettingBoxProps> = ({
  studentId,
  onCourseSetting,
}) => {
  const { data: schoolCourses = [], isLoading, error } = useSchoolCourseCheck(studentId);
  const navigate = useNavigate();
  console.log('schoolCourses의 들어있는 data:', schoolCourses);
  if (error) {
    console.error('Error loading school courses:', error);
    return <p>수강 과목 정보를 불러오는 중 오류가 발생했습니다.</p>;
  }

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <CourseSettingContainer>
      <BannerBox>
        <div>나의 성장을 돕는</div>
        <div>LMS+AI</div>
      </BannerBox>
      {Array.isArray(schoolCourses) && schoolCourses.length > 0 ? (
        <CourseSettingBox>
          <h1>2024년 2학기 수강 과목</h1>
          {schoolCourses.map(({ id, schoolCourse }) => (
            <CourseBox key={id}>
              <CourseInfo>
                <CourseName>{schoolCourse.courseName}</CourseName>
                <CourseDetails>
                  과목 코드: {schoolCourse.courseId} | 학점: {schoolCourse.gradeScore}
                </CourseDetails>
              </CourseInfo>
            </CourseBox>
          ))}
          <ButtonContainer>
            <Button
              onClick={() => navigate('./my_subject')}
              width="400px"
              height="50px"
              colorScheme="blue"
            >
              보러 가기
            </Button>
          </ButtonContainer>
        </CourseSettingBox>
      ) : (
        <NoneCourseSettingBox>
          <h1>2024년 2학기 수강하는 과목이 없습니다.</h1>
          <h2>수강 과목을 설정하세요!</h2>
          <Button
            onClick={onCourseSetting}
            width="400px"
            height="50px"
            colorScheme="blue"
          >
            설정 하기
          </Button>
        </NoneCourseSettingBox>
      )}
    </CourseSettingContainer>
  );
};

export default CourseSetting;
