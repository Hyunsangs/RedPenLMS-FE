import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
} from '@chakra-ui/react';
import { fetchCoursesByDepartment } from 'Api/api';
import { Course } from 'Interface/interface';
import { saveUserCourses } from 'Api/api';
import {
  CourseSelectionContainer,
  Title,
  SelectedCoursesContainer,
  ScrollableTableContainer,
  CompletionButton,
} from 'Styles/CourseSelectionStyle';
import { useNavigate } from 'react-router-dom';



const CourseSelection: React.FC = () => {
  const [department, setDepartment] = useState<string>(""); // 학과 선택
  const [currentCourses, setCurrentCourses] = useState<Course[]>([]); // 현재 학과의 과목 리스트
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]); // 선택된 과목 리스트
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState<string | null>(
    localStorage.getItem("studentId")
  );

  useEffect(() => {
    if (!studentId) {
      const storedStudentId = localStorage.getItem("studentId");
      if (storedStudentId) setStudentId(storedStudentId);
    }
  }, [studentId]);

  // 학과 선택 시 과목 로드
  useEffect(() => {
    const loadCourses = async () => {
      if (department) {
        try {
          const courses = await fetchCoursesByDepartment(department); // API 호출
          setCurrentCourses(courses);
        } catch (error) {
          console.error("과목 데이터를 불러오는데 실패했습니다:", error);
        }
      } else {
        setCurrentCourses([]);
      }
    };
    loadCourses();
  }, [department]);

  // 학과 변경 처리
  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDepartment(event.target.value);
  };

  // 과목 선택
  const handleSelectCourse = (course: Course) => {
    if (!selectedCourses.some((c) => c.courseId === course.courseId)) {
      setSelectedCourses((prevSelected) => [...prevSelected, course]);
    }
  };

  // 과목 제거
  const handleRemoveCourse = (courseId: string) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.filter((course) => course.courseId !== courseId)
    );
  };

  const handleCompletion = async () => {
    try {
      if (!selectedCourses.length) {
        alert("선택된 과목이 없습니다.");
        return;
      }
      if (!studentId) {
        alert("사용자 정보가 없습니다.");
        return;
      }
  
     // selectedCourses 배열 변환
     const coursesToSave = selectedCourses.map((course) => course.courseName);
  
      console.log("보낼 데이터:", coursesToSave);
  
      // API 호출
      await saveUserCourses( studentId ,coursesToSave);
      alert("과목 설정이 완료되었습니다!");
      navigate('/dashboard');
      
    } catch (error) {
      console.error("과목 저장 실패:", error);
      alert("과목 저장에 실패했습니다.");
    }
  };


  return (
    <CourseSelectionContainer>
      <Title>교과목 조회</Title>
      <Select
        placeholder="학과 선택"
        value={department}
        onChange={handleDepartmentChange}
        marginBottom="20px"
      >
        <option value="GS">게임소프트웨어학과</option>
        <option value="IS">정보보안학과</option>
        <option value="AI">인공지능학과</option>
      </Select>
      <ScrollableTableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>과목코드</Th>
              <Th>과목명</Th>
              <Th>학점</Th>
              <Th>선택</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentCourses.map((course) => (
              <Tr key={course.courseId}>
                <Td>{course.courseId}</Td>
                <Td>{course.courseName}</Td>
                <Td>{course.gradeScore}</Td>
                <Td>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={() => handleSelectCourse(course)}
                    isDisabled={selectedCourses.some(
                      (c) => c.courseId === course.courseId
                    )}
                  >
                    선택
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ScrollableTableContainer>

      <SelectedCoursesContainer>
        <Title>선택된 교과목</Title>
        <ScrollableTableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>과목코드</Th>
                <Th>과목명</Th>
                <Th>학점</Th>
                <Th>제거</Th>
              </Tr>
            </Thead>
            <Tbody>
              {selectedCourses.map((course) => (
                <Tr key={course.courseId}>
                  <Td>{course.courseId}</Td>
                  <Td>{course.courseName}</Td>
                  <Td>{course.gradeScore}</Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleRemoveCourse(course.courseId)}
                    >
                      제거
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </ScrollableTableContainer>
      </SelectedCoursesContainer>
      <CompletionButton onClick={handleCompletion}>설정 완료</CompletionButton>
    </CourseSelectionContainer>
  );
};

export default CourseSelection;