import styled from '@emotion/styled';

// 스타일 정의
export const GlobalDiv = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`

export const LoginInput = styled.input`
  font-size: 12px;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 10px;
  border: 0.5px solid grey;
  :hover {
    border-color: blue;
  }
`

export const LoginTitleContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  h1 {
    font-weight: bold;
    font-size: 2em;
    white-space: nowrap; // 글자 찌그러지지 않게 만듬
  }
  p {
    opacity: 0.8;
    font-size: 10px;
    color: #2d2d2d;
    white-space: nowrap; // 글자 찌그러지지 않게 만듬
  }
`

export const LoginContainer = styled.div`
  width: 388px;
  padding: 50px 0px;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", -apple-system, "system-ui", "Segoe UI", Roboto;

  hr {
    margin: 10px 0px;
    display: flex;
    
    width: 100%;
  }
  
  
`;

export const Notification = styled.div`
  font-size: 10px;
  text-align: center;
  opacity: 0.8;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`
export const ExtraContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 10px;
  }
`