import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useRegisterMutation } from 'hooks/useAuth';
import {
  GlobalDiv,
  RegisterContainer,
  RegisterFormContainer,
  RegisterTitleContainer,
  RegisterInput,
} from '../Styles/RegisterStyle';
import { useNavigate } from 'react-router-dom';

interface User {
  studentId: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export default function Register() {
  const [userForm, setUserForm] = useState<User>({
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const { mutate, isError, isSuccess } = useRegisterMutation();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userForm.studentId || !userForm.email || !userForm.password || !userForm.confirmPassword || !userForm.name) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (userForm.password !== userForm.confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    mutate(userForm, {
      onSuccess: () => {
        console.log('회원가입 성공');
        navigate('/login')
        alert('회원가입 성공');
      },
      onError: (error) => {
        console.error('회원가입 실패', error);
        alert('회원가입 실패: 정보를 다시 확인해주세요.');
      },
    });
  };

  return (
    <GlobalDiv>
      <RegisterContainer>
        <RegisterTitleContainer>
          <h1>RPLms</h1>
          <p>회원가입을 통해 빨간펜lms를 이용하세요</p>
        </RegisterTitleContainer>
        <hr />
        <RegisterFormContainer onSubmit={handleSubmit}>
          <RegisterInput name="studentId" placeholder="학번" value={userForm.studentId} onChange={handleInputChange} />
          <RegisterInput name="email" placeholder="이메일" value={userForm.email} onChange={handleInputChange} />
          <RegisterInput name="password" type="password" placeholder="비밀번호 (영문 + 숫자 + 8자이상)" value={userForm.password} onChange={handleInputChange} />
          <RegisterInput name="confirmPassword" type="password" placeholder="비밀번호 확인" value={userForm.confirmPassword} onChange={handleInputChange} />
          <RegisterInput name="name" placeholder="이름" value={userForm.name} onChange={handleInputChange} />
          <Button width="100%" colorScheme="blue" type="submit">
            회원가입
          </Button>
        </RegisterFormContainer>
        <hr />
        <p>이용약관의 변경이나 관계 법령에 따라 중요 고지 사항은 메일 수신 동의 여부에 상관 없이 안내될 수 있습니다.</p>
        {isError && <p>회원가입 중 에러가 발생했습니다.</p>}
        {isSuccess && <p>회원가입이 성공적으로 완료되었습니다.</p>}
      </RegisterContainer>
    </GlobalDiv>
  );
}
