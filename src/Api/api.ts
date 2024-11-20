import axios from 'axios';
import qs from 'qs'; // URL 인코딩을 위해 qs 라이브러리 사용
import { Course } from 'Interface/interface';
import { CoursesData } from 'Interface/interface';

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true, // 쿠키 사용을 위한 설정
});

// 세션 상태 확인 함수
export const checkSession = async () => {
  try {
    const response = await apiClient.get('/session-check');
    console.log("세션 체크 응답:", response.data); // 여기에 로그 추가
    return response.data;
  } catch (error) {
    console.error("세션 체크 실패:", error);
    throw error;
  }
};


// 로그인 요청 함수
export const loginUser = async (studentId: string, password: string) => {
  try {
    const response = await apiClient.post(
      '/login',
      qs.stringify({
        studentId,
        password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // URL 인코딩된 데이터 전송을 위한 헤더 설정
        },
      }
    );
    console.log(response.data);
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error; // 오류 발생 시 상위 코드로 전달
  }
};

// 로그아웃 요청 함수
export const logoutUser = async () => {
  try {
    const response = await apiClient.post('/logout');
    console.log('성공적으로 로그아웃 되었습니다.', response.data);
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

// 회원가입 요청 함수
export const registerUser = async (userData: {
    studentId: string;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }) => {
    try {
      const response = await apiClient.post('/signup', userData);
      return response.data; // 응답 데이터 반환
    } catch (error) {
      console.error('회원가입 실패:', error);
      throw error; // 오류 발생 시 상위 코드로 전달
    }
  };

// 사용자의 학년,학과,직무가 설정되어있는지에 대한 T, F
  export const checkUserInfoCompletion = async (studentId: string) => {
    try{
      const response = await apiClient.get(`/checkInfo/${studentId}`);
      
      return response.data; // True Or False 내보냄.
    } catch (error) {
      console.log('checkInfo 오류:',error);
      throw error;
    }
   
  };

  // 스텝 폼 데이터 전송 함수
export const submitStepFormData = async (formData: {  
  departmentId: number; // 하드코딩됨. 소프트웨어학부 id : 1 밖에 안 만듬.
  major: string | null;
  year: number | null;
  jobId: number | null;
}) => {  
  try {    
    const response = await apiClient.post('/profile', formData);    
    return response.data;  
  } catch (error) {    
    console.error('폼 데이터 전송 실패:', error);    
    throw error;  
  }
};

// 학과에 따른 과목 목록을 불러오는 함수
export const fetchCoursesByDepartment = async (majorPrefix: string): Promise<Course[]> => {
  try {
    const response = await apiClient.get<Course[]>(`/school-courses/major/${majorPrefix}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('과목 데이터를 불러오는데 실패했습니다:', error);
    throw error;
  }
};

// 사용자 수강 과목 강의 저장 함수
export const saveUserCourses = async (
  studentId: string,
  courses: string[], // 단순 강의명 리스트로 변경
) => {
  try {
    const response = await apiClient.post(`${studentId}`, courses);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('교과목 강의 설정을 실패하였습니다:', error);
  }
};

// 수강 교과목 강의 설정 확인 및 불러오기
// CourseSettingBox.tsx에 변화에 관여하는 함수
export const checkSchoolCourseCompletion = async (studentId: string) => {
  try {
    const response = await apiClient.get(`/have/schoolCourse/${studentId}`);
    return response.data || [];
  } catch(error) {
    console.error('수강 교과목 강의 get요청 실패:', error)
    return [];
  }
 
};


// 사용자의 학교 강의 및 주차별 가지고 오기.
export const fetchMyCourses = async (studentId: string): Promise<CoursesData> => {
  try {
    const response = await apiClient.get(`/${studentId}/contents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};