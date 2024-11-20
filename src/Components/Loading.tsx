import React from 'react';
import styled from '@emotion/styled';

export const LoadingContainer = styled.div`
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 56px auto;

  div {
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #717482;
    border-color: #717482 transparent transparent;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  // child 2 스타일 지정
  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  // child 3 스타일 지정
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  // child 4 스타일 지정
  div:nth-child(4) {
    border-color: #32cd32 transparent transparent;
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingContainer>
  );
};

export default Loading;
