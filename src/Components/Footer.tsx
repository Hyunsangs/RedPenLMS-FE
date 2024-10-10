import React from 'react';
import styled from '@emotion/styled';

export const FooterContainer = styled.div`
    padding: 10px;
    font-size: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(71, 25, 29);
    border-top: 1px solid transparent; /* 투명한 선으로 초기 설정 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7); /* 흐림 효과를 추가함 */
    color: white;
`

export default function Footer () {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <FooterContainer>
            <div className='footer-content'>
                    <div className='footer-high-content'><p>중부대학교 게임소프트웨어학과 졸업작품</p></div>
                    <div className='footer-middle-content'>
                        <p>팀명: RedPen | 광고문의: 010-2650-6091 | Email: pycandyq@naver.com</p>
                    </div>
                    <div className='footer-low-content'><p>주소: 28912 경기도 고양시 덕양구 대자동 중부대학교 </p></div>
                    <p>Copyright &copy; <span>{thisYear()}</span></p>
                </div>
        </FooterContainer>
        
    )
};

