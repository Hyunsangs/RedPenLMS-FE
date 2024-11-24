import styled from "@emotion/styled";

export const CourseSettingContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const NoneCourseSettingBox = styled.div`

  width: 100%;
  height: 60%;
  background-color: #2c3e50;
  text-align: center;
  margin-top: 2%;
  border: 3px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  
  h1 {
    color: white;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  h2 {
    color: white;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const CourseSettingBox = styled.div`
white-space: nowrap;
  width: 100%;
  height: 60%;
  background-color: #2c3e50;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 2%;
  border: 3px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 내용이 위에서부터 시작 */
  align-items: center;
  padding: 30px;
  box-sizing: border-box; /* padding과 border를 포함해 height 계산 */
  
  h1 {
    color: white;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  h2 {
    color: white;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const BannerBox = styled.div`
    
    min-width: 100%;
    height: 38%;
    padding: 100px;
    font-size: 32px;
    color: white;
    font-weight: 700;
    white-space: nowrap;
    background-image: url('/img/dashboardBanner.jpg');
    border: 3px solid grey;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
`

export const CourseBox = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CourseName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const CourseDetails = styled.div`
  font-size: 14px;
  color: #666;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;