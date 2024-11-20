// react-query의 useMutation을 사용해 로그인과 회원가입 훅을 만듭니다.
import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser, logoutUser } from 'Api/api';

// 로그인 훅
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: ({
      studentId,
      password,
    }: {
      studentId: string;
      password: string;
    }) => loginUser(studentId, password),
  });
};

// 회원가입 훅
export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (userData: {
      studentId: string;
      email: string;
      password: string;
      confirmPassword: string;
      name: string;
    }) => registerUser(userData),
  });
};

// 로그아웃 훅
export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: logoutUser, // 로그아웃을 수행하는 API 함수
    onSuccess: () => {
    
      console.log('로그아웃 성공');
      
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });
};