import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Login from './pages/Login/Login';
import Students from './pages/students/Students';
import CreateStudent from './pages/students/CreateStudent';
import Guardians from './pages/guardians/Guardians';
import CreateGuardian from './pages/guardians/CreateGuardian';
import Staff from './pages/staff/Staff';
import CreateStaff from './pages/staff/CreateStaff';
import Concessions from './pages/concessions/Concessions';
import CreateConcession from './pages/concessions/CreateConcession';
import Allowances from './pages/allowances/Allowances';
import CreateAllowance from './pages/allowances/CreateAllowance';
import Deductions from './pages/deductions/Deductions';
import CreateDeduction from './pages/deductions/CreateDeduction';

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
        <Route
          path="/concessions"
          element={
            <MainLayout>
              <Concessions />
            </MainLayout>
          }
        />
        <Route
          path="/concessions/create"
          element={
            <MainLayout>
              <CreateConcession />
            </MainLayout>
          }
        />
        <Route
          path="/allowances"
          element={
            <MainLayout>
              <Allowances />
            </MainLayout>
          }
        />
        <Route
          path="/allowances/create"
          element={
            <MainLayout>
              <CreateAllowance />
            </MainLayout>
          }
        />
        <Route
          path="/deductions"
          element={
            <MainLayout>
              <Deductions />
            </MainLayout>
          }
        />
        <Route
          path="/deductions/create"
          element={
            <MainLayout>
              <CreateDeduction />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
