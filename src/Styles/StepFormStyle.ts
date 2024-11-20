import styled from "@emotion/styled";
import { motion } from 'framer-motion';
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StepFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 30px;
  background-color: #f5f7fa;
`;

export const MainTitle = styled.div`
  text-align: center;
  width: 700px;
  font-size: 36px;
  font-weight: bold;
  color: #333;
  padding: 10px;
`;

export const Box = styled(motion.div)`
  width: 450px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-bottom: 25px;
  h1 {
    font-size: 30px;
  }
`;

export const ChoiceButton = styled.button<{ selected: boolean }>`
  padding: 12px 25px;
  margin: 8px 0;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.selected ? '#4a90e2' : '#e0e4e8')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #4a90e2;
    color: white;
    transform: scale(1.05);
  }
`;

export const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export const BoxTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;