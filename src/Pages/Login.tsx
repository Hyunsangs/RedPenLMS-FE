import React from 'react';  
import { 
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  GlobalDiv,
  LoginContainer,
  LoginTitleContainer,
  Notification,
  LoginFormContainer,
  LoginInput,
  ExtraContainer,
} from '../Styles/LoginStyle'

export default function Login() {
  
    return (
      <GlobalDiv>
         <LoginContainer>
          <LoginTitleContainer>
            <h1>RPLms</h1>
            <p>아이디를 선택하여 빨간펜lms를 이용하세요</p>
          </LoginTitleContainer> 

          <hr />
          <LoginFormContainer>
            <LoginInput placeholder='아이디' />
            <LoginInput placeholder='비밀번호' />
            <Button width='100%' colorScheme='blue'>로그인</Button>
          </LoginFormContainer>
          <ExtraContainer>
              <Link to='/'>비밀번호 찾기</Link>
              <Link to='/register'>회원가입</Link>
          </ExtraContainer>
          <hr />
          <Notification>회원가입 시 RPlms의 서비스 약관 및 개인정보 처리방침을 확인하였으며, 동의합니다.</Notification>         
        </LoginContainer>
      </GlobalDiv>
    );
}
