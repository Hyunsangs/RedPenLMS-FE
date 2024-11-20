import { useQuery } from '@tanstack/react-query';
import { checkSchoolCourseCompletion } from 'Api/api';

export const useSchoolCourseCheck = (studentId: string) => {
  return useQuery({
    queryKey: ['schoolCourseCheck', studentId],
    queryFn: () => checkSchoolCourseCompletion(studentId),
    enabled: !!studentId,
    refetchOnWindowFocus: false, // 포커스 시 자동 새로고침 비활성화
  });
};