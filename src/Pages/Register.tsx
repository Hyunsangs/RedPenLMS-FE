import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GlobalDiv, RegisterContainer, RegisterFormContainer, RegisterTitleContainer, RegisterInput } from '../Styles/RegisterStyle';
import { Button } from '@chakra-ui/react';
import { registerUser } from 'Api/api';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  // useMutation 설정 (Generic 타입 설정)
  const mutation = useMutation<any, Error, User>({
    mutationFn: () => registerUser(userForm),
    onSuccess: () => {
      console.log('회원가입 성공');
      alert('회원가입성공');
    },
    onError: (error: Error) => {
      console.error('회원가입 실패', error);
      console.log('회원가입 실패');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 입력 필드가 비어있는지 확인
  if (!userForm.studentId || !userForm.email || !userForm.password || !userForm.confirmPassword || !userForm.name) {
    alert('모든 필드를 입력해주세요.');
    return;
  }

  // 비밀번호와 비밀번호 확인이 일치하지 않을 때
  if (userForm.password !== userForm.confirmPassword) {
    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    return;
  }

    mutation.mutate(userForm); // 폼 데이터 전송
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
          <RegisterInput 
            name='studentId' 
            placeholder='학번' 
            value={userForm.studentId} 
            onChange={handleInputChange} 
          />
          <RegisterInput 
            name='email' 
            placeholder='이메일' 
            value={userForm.email} 
            onChange={handleInputChange} 
          />
          <RegisterInput 
            name='password' 
            type='password' 
            placeholder='비밀번호 (영문 + 숫자 + 8자이상)' 
            value={userForm.password} 
            onChange={handleInputChange} 
          />
          <RegisterInput 
            name='confirmPassword' 
            type='password' 
            placeholder='비밀번호 확인' 
            value={userForm.confirmPassword} 
            onChange={handleInputChange} 
          />
          <RegisterInput 
            name='name' 
            placeholder='이름' 
            value={userForm.name} 
            onChange={handleInputChange} 
          />
          <Button width='100%' colorScheme='blue' type='submit'>
            회원가입
          </Button>
        </RegisterFormContainer>
        <hr />
        <p>이용약관의 변경이나 관계 법령에 따라 회원님께 안내되어야 할 중요 고지 사항은 메일 수신 동의 여부에 상관 없이 안내될 수 있습니다.</p>
        {mutation.isError && <p>회원가입 중 에러가 발생했습니다.</p>}
        {mutation.isSuccess && <p>회원가입이 성공적으로 완료되었습니다.</p>}
      </RegisterContainer>
    </GlobalDiv>
  );
}
