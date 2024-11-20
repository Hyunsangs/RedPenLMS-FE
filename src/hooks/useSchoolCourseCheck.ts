import { useQuery } from '@tanstack/react-query';
import { checkSchoolCourseCompletion } from 'Api/api';

export const useSchoolCourseCheck = (studentId: string) => {
  return useQuery({
    queryKey: ['schoolCourseCheck', studentId],
    queryFn: () => checkSchoolCourseCompletion(studentId),
    enabled: !!studentId,
  });
};