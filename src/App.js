import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSiswa from './components/LoginSiswa';
import LoginTutor from './components/LoginTutor';
import SignInSiswa from './components/SignInSiswa';
import SignInTutor from './components/SignInTutor';
import LandingPage from './components/LandingPage';
import PilihAkun from './components/PilihAkun';
// import TutorAccount from './components/PageTutor';
import DashboardStudent from './components/DashStudent';
import DashboardTeacher from './components/DashTeacher';
import CourseDetailsStudent from './components/CourseDetailStudent';
import CourseDetailsTeacher from './components/CourseDetailTeacher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/pilih-akun' element={<PilihAkun />} />
        <Route path='/login-siswa' element={<LoginSiswa />} />
        <Route path='/login-tutor' element={<LoginTutor />} />
        <Route path='/signin-siswa' element={<SignInSiswa />} />
        <Route path='/signin-tutor' element={<SignInTutor />} />
        <Route path='/dashboard-siswa' element={<DashboardStudent />} />
        <Route path='/dashboard-tutor' element={<DashboardTeacher />} />
        <Route path='/detail-siswa/:courseId' element={<CourseDetailsStudent />} />
        <Route path='/detail-tutor/:courseId' element={<CourseDetailsTeacher />} />
      </Routes>
    </Router>

  );
}

export default App;
