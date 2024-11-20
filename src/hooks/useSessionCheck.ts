import { useQuery } from '@tanstack/react-query';
import { checkSession } from 'Api/api';

// 세션 상태 확인 훅
export const useSessionCheck = () => {
 

  return useQuery({
    queryKey: ['sessionStatus'], // 쿼리 키
    queryFn: checkSession,       // API 호출 함수
    retry: false,
    refetchOnWindowFocus: false,
  });
};