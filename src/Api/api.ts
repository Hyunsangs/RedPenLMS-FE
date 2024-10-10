import axios from 'axios';
import qs from 'qs'; // URL 인코딩을 위해 qs 라이브러리 사용

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true, // 쿠키 사용을 위한 설정
});

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
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error; // 오류 발생 시 상위 코드로 전달
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