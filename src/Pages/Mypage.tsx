import React from 'react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { jobOptions } from 'Constants/jobOptions';
import { useNavigate } from 'react-router-dom';
import { useSchoolCourseCheck } from 'hooks/useSchoolCourseCheck'
import { UserCourse } from 'Interface/interface';
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
`;

export const SectionBoxContainer = styled.div`
  display: flex;
  height: 100%;

  gap: 15px;
`;

const SectionBox = styled.div`
  flex: 1;
  border: 1px solid #f4f4f4;
  background-color: #2c3e50;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const MypageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #0b0b0b;
  margin-bottom: 20px;
  border-bottom: 2px solid #adabab;
  padding-bottom: 10px;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  border-bottom: 1px solid #4a4a4a;
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #4a4a4a;
  color: white;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #4a4a4a;
  color: white;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CourseItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4a4a4a;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #d9363e;
  }
`;
// 타입 정의
interface SchoolCourse {
    id: number;
    schoolCourse: {
      courseId: number;
      courseName: string;
    };
  }

const Mypage: React.FC = () => {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedStudentId = localStorage.getItem('studentId');

    if (storedUsername) setUsername(storedUsername);
    if (storedStudentId) setStudentId(storedStudentId);
  }, []);

  const { data: schoolCourses = [], isLoading } = useSchoolCourseCheck(
    studentId || '',
  );
  if (isLoading) {
    <div>...Loading</div>
  }
  
  console.log('myPage의 들어있는 SchoolCourse: ',schoolCourses);

  const handleJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJob(event.target.value);
    console.log(`선택된 직무: ${event.target.value}`);
  };

  const handleDeleteCourse = (courseName: string) => {
    // 강의 삭제 로직 추가
    console.log(`${courseName} 삭제`);
  };

  return (
    <PageContainer>
      <MypageTitle>{username}님의 My Page</MypageTitle>
      <SectionBoxContainer>
        {/* 왼쪽 섹션 */}
        <SectionBox>
          <SectionTitle>내 정보 설정</SectionTitle>
          <StyledInput placeholder="이름 변경" />
         
          <StyledSelect>
            <option value="" disabled selected>
              학년 선택
            </option>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
            <option value="4">4학년</option>
          </StyledSelect>
          <StyledSelect>
            <option value="" disabled selected>
              학과 선택
            </option>
            <option value="game_software">게임소프트웨어학과</option>
            <option value="ai">인공지능학과</option>
            <option value="information_security">정보보안학과</option>
          </StyledSelect>
          <StyledSelect onChange={handleJobChange} defaultValue="">
            <option value="" disabled>
              직무 선택
            </option>
            {jobOptions.map((job) => (
              <option key={job.id} value={job.name}>
                {job.name}
              </option>
            ))}
          </StyledSelect>
          <SaveButton>변경 사항 저장</SaveButton>
        </SectionBox>

        {/* 오른쪽 섹션 */}
        <SectionBox>
          <SectionTitle>수강 강의 설정</SectionTitle>
          <SaveButton
            onClick={() => {
              navigate('../school_setting');
            }}
            style={{ marginBottom: '20px' }}
          >
            교과목 강의 추가
          </SaveButton>
          <CourseList>
            {schoolCourses.map(({ id , schoolCourse}:  SchoolCourse ) => (
              <CourseItem key={id}>
                {schoolCourse.courseName}
                <DeleteButton onClick={() => handleDeleteCourse(schoolCourse.courseName)}>
                  삭제
                </DeleteButton>
              </CourseItem>
            ))}
          </CourseList>
        </SectionBox>
      </SectionBoxContainer>
    </PageContainer>
  );
};

export default Mypage;
