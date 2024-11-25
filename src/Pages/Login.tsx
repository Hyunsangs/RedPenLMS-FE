import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'hooks/useAuth';
import {
  GlobalDiv,
  LoginContainer,
  LoginTitleContainer,
  Notification,
  LoginFormContainer,
  LoginInput,
  ExtraContainer,
} from '../Styles/LoginStyle';
import { useQueryClient } from '@tanstack/react-query';

interface LoginData {
  studentId: string;
  password: string;
}

interface LoginProps {
  onLoginSuccess: (id: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [loginForm, setLoginForm] = useState<LoginData>({
    studentId: '',
    password: '',
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isError } = useLoginMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.studentId || !loginForm.password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    mutate(loginForm, {
      onSuccess: (response) => {
        const { studentId, userName, jobId } = response; 
        alert('로그인 성공');
        localStorage.setItem('studentId', studentId);
        localStorage.setItem('username', userName);
        localStorage.setItem('jobId', jobId)
        console.log('성공했을때 studentId값 확인:', studentId);
        queryClient.setQueryData(['studentId'], studentId);
        onLoginSuccess(studentId); // studentId를 상위로 전달
        navigate('/dashboard');
        console.log('로그인 성공후 /dashboard로 이동');
      },
      onError: (error) => {
        console.error('로그인 실패', error);
        alert('로그인 실패: 사용자 정보를 다시 확인해주세요.');
      },
    });
  };

  return (
    <GlobalDiv>
      <LoginContainer>
        <LoginTitleContainer>
          <h1>RmsPlus</h1>
          <p>아이디를 선택하여 빨간펜lms를 이용하세요</p>
        </LoginTitleContainer>
        <hr />
        <LoginFormContainer onSubmit={handleSubmit}>
          <LoginInput
            name="studentId"
            placeholder="아이디"
            value={loginForm.studentId}
            onChange={handleInputChange}
          />
          <LoginInput
            name="password"
            type="password"
            placeholder="비밀번호"
            value={loginForm.password}
            onChange={handleInputChange}
          />
          <Button width="100%" colorScheme="blue" type="submit">
            로그인
          </Button>
        </LoginFormContainer>
        <ExtraContainer>
          <Link to="/forgot-password">비밀번호 찾기</Link>
          <Link to="/register">회원가입</Link>
        </ExtraContainer>
        <hr />
        <Notification>
          회원가입 시 RmsPlus의 서비스 약관 및 개인정보 처리방침을 확인하였으며,
          동의합니다.
        </Notification>
        {isError && <p>로그인 중 에러가 발생했습니다. 다시 시도해주세요.</p>}
      </LoginContainer>
    </GlobalDiv>
  );
};

export default Login;
