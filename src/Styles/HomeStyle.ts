import styled from "@emotion/styled";

export const MainContainer = styled.div`
    
`

export const MainSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 100%;
    background-image: url('/img/bgimg2.2.jpg');
    object-fit: fill;
    background-repeat: no-repeat;
    background-size: cover; /* 배경 이미지가 컨테이너 크기에 맞게 조정 */
`

export const Section1 = styled.div`
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
    
`

export const SubSection = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
`

export const Section2 = styled.div`
    padding: 50px;
    width: 70%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Section2Title = styled.h1`
    font-size: 18px;
`

export const ExplainBoxContainer = styled.div`
    display: flex;
`

export const ExplainBox = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

export const PictureBox = styled.div`
    width: 250px;
    height: 150px;
    background-color: red;
`