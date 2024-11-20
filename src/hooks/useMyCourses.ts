import { useQuery } from '@tanstack/react-query';
import { fetchMyCourses } from 'Api/api';
import { CoursesData } from 'Interface/interface';
export const useMyCourses = (studentId: string) => {
    return useQuery<CoursesData>({
        queryKey: ['myCourses', studentId],
        queryFn: () => fetchMyCourses(studentId),
        enabled: !!studentId,
      });
    };