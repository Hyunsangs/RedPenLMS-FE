import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';

export const CourseSelectionContainer = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #f8f9fa;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const SelectedCoursesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
`;

export const ScrollableTableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;

export const CompletionButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  background-color: #4a90e2;
  color: white;
`;
