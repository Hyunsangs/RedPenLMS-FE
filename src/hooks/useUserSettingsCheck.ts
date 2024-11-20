// useUserSettingsCheck.ts
import { useQuery } from '@tanstack/react-query';
import { checkUserInfoCompletion } from 'Api/api';

export const useUserSettingsCheck = (studentId: string) => {
  return useQuery({
    queryKey: ["userSettings", studentId],
    queryFn: () => checkUserInfoCompletion(studentId),
    enabled: !!studentId, // studentId가 있을 때만 쿼리 실행
    });
};
