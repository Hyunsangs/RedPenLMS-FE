import styled from '@emotion/styled';

export const MainContainer = styled.div``;

export const MainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  background-image: url('/img/mainHomeLogo.jpg');
  object-fit: fill;
  background-repeat: no-repeat;
  background-size: cover; /* 배경 이미지가 컨테이너 크기에 맞게 조정 */
`;

export const Section1 = styled.div`
  color: white;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  p {
    font-size: 42px;
    margin-bottom: 20px;
    line-height: 60px; /* 줄 간격을 조금 더 띄우고 싶을 때 */
  }

  Button {
    margin-top: 40px;
  }
`;

export const SubSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

export const Section2 = styled.div`
  padding: 50px;
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section2Title = styled.h1`
  font-size: 18px;
`;

export const ExplainBoxContainer = styled.div`
  display: flex;
`;

export const ExplainBox = styled.div`
  width: 100%;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  padding: 50px;
  text-align: center;
  h1 {
    font-size: 24px;
  }
  p {
    opacity: 0.7;
  }
`;

export const PictureBox = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 150px;
  background-color: red;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover; /* 이미지가 박스에 맞게 조정 */
  background-position: center; /* 이미지 가운데 정렬 */
  border-radius: 8px; /* 선택적으로 테두리 둥글게 */
`;
