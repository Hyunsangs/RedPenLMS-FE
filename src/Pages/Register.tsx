import React from 'react';  
import {
  GlobalDiv,
  RegisterContainer,
  RegisterFormContainer,
  RegisterTitleContainer,
  RegisterInput,
} from '../Styles/RegisterStyle'
import { 
  Button,
} from '@chakra-ui/react';




export default function Register() {
    return (
      <GlobalDiv>
        <RegisterContainer>
          <RegisterTitleContainer>
            <h1>RPLms</h1>
            <p>회원가입을 통해 빨간펜lms를 이용하세요</p>
          </RegisterTitleContainer>
          <hr />
          <RegisterFormContainer>
            <RegisterInput placeholder='학번'/>
            <RegisterInput placeholder='이메일'/>
            <RegisterInput placeholder='비밀번호 (영문 + 숫자 + 8자이상)'/>
            <RegisterInput placeholder='비밀번호 확인'/>
            <RegisterInput placeholder='이름'/>
            <Button width='100%' colorScheme='blue'>회원가입</Button>
           </RegisterFormContainer>
           <hr />
           <p>이용약관의 변경이나 관계 법령에 따라 회원님께 안내되어야
             할 중요 고지 사항은 메일 수신 동의 여부에 상관 없이 
             안내될 수 있습니다.</p>
        </RegisterContainer>
        
      </GlobalDiv>
    );
}
  