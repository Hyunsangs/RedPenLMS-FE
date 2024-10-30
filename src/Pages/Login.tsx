import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GlobalDiv,
  LoginContainer,
  LoginTitleContainer,
  Notification,
  LoginFormContainer,
  LoginInput,
  ExtraContainer,
} from '../Styles/LoginStyle';
import { loginUser } from 'Api/api';

interface LoginData {
  studentId: string;
  password: string;
}

export default function Login() {
  const [loginForm, setLoginForm] = useState<LoginData>({
    studentId: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // 로그인 요청을 다루기 위한 리엑트 쿼리 뮤테이션
  const mutation = useMutation<any, Error, LoginData>({
    mutationFn: () => loginUser(loginForm.studentId, loginForm.password),
    onSuccess: () => {
      console.log('로그인 성공');
      alert('로그인 성공!');
      navigate('/dashboard');
    },
    onError: (error: Error) => {
      console.error('로그인 실패', error);
      alert('로그인 실패: 사용자 정보를 다시 확인해주세요.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 필드가 비어있는지 확인
    if (!loginForm.studentId || !loginForm.password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    // 로그인 요청 보내기
    mutation.mutate(loginForm);
  };

  return (
    <GlobalDiv>
      <LoginContainer>
        <LoginTitleContainer>
          <h1>RPLms</h1>
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
          회원가입 시 RPlms의 서비스 약관 및 개인정보 처리방침을 확인하였으며,
          동의합니다.
        </Notification>
        {mutation.isError && (
          <p>로그인 중 에러가 발생했습니다. 다시 시도해주세요.</p>
        )}
      </LoginContainer>
    </GlobalDiv>
  );
}
