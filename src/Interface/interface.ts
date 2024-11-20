export interface Course {
    courseId: string;
    courseName: string;
    gradeScore: number;
  }

export interface CourseSettingBoxProps {
    studentId: string;
    onCourseSetting: () => void;
  }
  
export interface StepFormProps {
    onComplete: () => void;
  }

// CourseSettingBox 에 사용자가 교과목 받을때 필요한 인터페이스
export interface UserCourse {
    courseId : string;
    courseName : string;
    gradeScore : number;
  }
  

export type WeeklyContent = {
    id: number;
    week: number;
    weeklyContent: string;
  };
  
export type CoursesData = {
    [key: string]: WeeklyContent[];
  };