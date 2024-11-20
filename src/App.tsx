import React, {useState, useEffect} from 'react';
import Home from './Pages/Home';
import { Routes, Route} from 'react-router-dom';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import Main from 'Pages/Main';
import ProtectedRoute from './Routes/ProtectedRoute';




function App() {
  const [studentId, setStudentId] = useState<string | null>(() => {
    // 초기값으로 로컬스토리지에서 studentId를 불러옴
    return localStorage.getItem('studentId');
  });

  // 로그인 성공 시 호출되는 콜백 함수
  const handleLoginSuccess = (id: string) => {
    setStudentId(id); // 상태 업데이트
  };

  // studentId 값이 없는 경우 로컬스토리지에서 다시 가져옴 (새로고침 대응)
  useEffect(() => {
    if (!studentId) {
      const storedId = localStorage.getItem('studentId');
      if (storedId) {
        setStudentId(storedId);
      }
    }
  }, [studentId]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute component={() => <Main studentId={studentId || ''} />} />
        }
      />
    </Routes>
  );
}

export default App;
