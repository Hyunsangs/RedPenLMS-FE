import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Table, Thead, Tbody, Tr, Th, Td, Select } from '@chakra-ui/react';

// 스타일 정의
const CourseSelectionContainer = styled.div`
  padding: 20px;
  width: 100%;
  
  background-color: #f8f9fa;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;
const SelectedCoursesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
`;

const ScrollableTableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;
const CompletionButton = styled(Button)`
  margin-top: 20px;
  
  width: 100%;
  background-color: #4a90e2;
  color: white;
`;

// 인터페이스 정의
interface Course {
  id: string;
  code: string;
  department: string;
  grade: number;
  name: string;
  type: string;
  credits: number;
}

interface CourseSelectionProps {
  onClose: () => void;
}

// 학과별 더미 데이터
const allCourses: Course[] = [
  { id: '1', code: 'G101', department: '게임소프트웨어학과', grade: 1, name: '게임개발기초', type: '전필', credits: 3 },
  { id: '2', code: 'G102', department: '게임소프트웨어학과', grade: 2, name: '게임엔진프로그래밍', type: '전필', credits: 3 },
  { id: '3', code: 'G103', department: '게임소프트웨어학과', grade: 3, name: '게임그래픽스', type: '전필', credits: 4 },
  { id: '4', code: 'S101', department: '정보보안학과', grade: 1, name: '보안개론', type: '전필', credits: 3 },
  { id: '5', code: 'S102', department: '정보보안학과', grade: 2, name: '네트워크보안', type: '전필', credits: 3 },
  { id: '6', code: 'S103', department: '정보보안학과', grade: 3, name: '암호학', type: '전필', credits: 4 },
  { id: '7', code: 'IT101', department: '스마트IT학과', grade: 1, name: 'IoT개론', type: '전필', credits: 3 },
  { id: '8', code: 'IT102', department: '스마트IT학과', grade: 2, name: '데이터분석', type: '전필', credits: 3 },
  { id: '9', code: 'IT103', department: '스마트IT학과', grade: 3, name: 'AI응용', type: '전필', credits: 4 },
];

 // 메인 함수 -----------------
const CourseSelection: React.FC<CourseSelectionProps> = ({ onClose }) => {
  const [department, setDepartment] = useState<string>(''); // 학과 선택 상태
  const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: Course[] }>({});
  const [currentCourses, setCurrentCourses] = useState<Course[]>([]);

  useEffect(() => {
    const filteredCourses = allCourses.filter((course) => course.department === department);
    setCurrentCourses(filteredCourses);
  }, [department]);

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(event.target.value);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourses((prevSelected) => {
      const updatedCourses = prevSelected[course.department] || [];
      // 중복 방지: 이미 선택된 과목이 아니라면 추가
      if (!updatedCourses.some((c) => c.id === course.id)) {
        return { ...prevSelected, [course.department]: [...updatedCourses, course] };
      }
      return prevSelected;
    });
  };

  const handleRemoveCourse = (courseId: string, dept: string) => {
    setSelectedCourses((prevSelected) => {
      const updatedCourses = prevSelected[dept]?.filter((course) => course.id !== courseId) || [];
      return { ...prevSelected, [dept]: updatedCourses };
    });
  };

 
  const handleCompletion = () => {
    alert('설정이 완료되었습니다!');
    onClose();
  };

  return (
    <CourseSelectionContainer>
      <Title>교과목 조회</Title>
      <Select placeholder="학과 선택" value={department} onChange={handleDepartmentChange} marginBottom="20px">
        <option value="게임소프트웨어학과">게임소프트웨어학과</option>
        <option value="정보보안학과">정보보안학과</option>
        <option value="스마트IT학과">스마트IT학과</option>
      </Select>

      {/* 스크롤 가능한 박스로 테이블 감싸기 */}
      <ScrollableTableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>과목코드</Th>
              <Th>학과</Th>
              <Th>학년</Th>
              <Th>과목명</Th>
              <Th>구분</Th>
              <Th>학점</Th>
              <Th>선택</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentCourses.map((course) => (
              <Tr key={course.id}>
                <Td>{course.code}</Td>
                <Td>{course.department}</Td>
                <Td>{course.grade}</Td>
                <Td>{course.name}</Td>
                <Td>{course.type}</Td>
                <Td>{course.credits}</Td>
                <Td>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={() => handleSelectCourse(course)}
                    isDisabled={(selectedCourses[course.department] || []).some((c) => c.id === course.id)}
                  >
                    선택
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ScrollableTableContainer>

      {/* 선택된 과목 목록 */}
      <SelectedCoursesContainer>
        <Title>선택된 교과목</Title>
        <ScrollableTableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>과목코드</Th>
                <Th>학과</Th>
                <Th>과목명</Th>
                <Th>학점</Th>
                <Th>제거</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.keys(selectedCourses).flatMap((dept) =>
                selectedCourses[dept].map((course) => (
                  <Tr key={course.id}>
                    <Td>{course.code}</Td>
                    <Td>{course.department}</Td>
                    <Td>{course.name}</Td>
                    <Td>{course.credits}</Td>
                    <Td>
                        <Button
                            size="sm"
                            colorScheme="red"
                            onClick={() => handleRemoveCourse(course.id, course.department)} // department 전달
                        >
                            제거
                        </Button>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </ScrollableTableContainer>
      </SelectedCoursesContainer>
      
      <CompletionButton onClick={handleCompletion}>설정 완료</CompletionButton>
    </CourseSelectionContainer>
  );
};

export default CourseSelection;