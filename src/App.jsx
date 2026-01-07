import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Login from './pages/Login/Login';
import Students from './pages/students/Students';
import CreateStudent from './pages/students/CreateStudent';
import Guardians from './pages/guardians/Guardians';
import CreateGuardian from './pages/guardians/CreateGuardian';
import Staff from './pages/staff/Staff';
import CreateStaff from './pages/staff/CreateStaff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/students"
          element={
            <MainLayout>
              <Students />
            </MainLayout>
          }
        />
        <Route
          path="/students/create"
          element={
            <MainLayout>
              <CreateStudent />
            </MainLayout>
          }
        />
        <Route
          path="/guardians"
          element={
            <MainLayout>
              <Guardians />
            </MainLayout>
          }
        />
        <Route
          path="/guardians/create"
          element={
            <MainLayout>
              <CreateGuardian />
            </MainLayout>
          }
        />
        <Route
          path="/staff"
          element={
            <MainLayout>
              <Staff />
            </MainLayout>
          }
        />
        <Route
          path="/staff/create"
          element={
            <MainLayout>
              <CreateStaff />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
