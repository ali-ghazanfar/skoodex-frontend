import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Login from './pages/Login/Login';
import Students from './pages/students/Students';
import CreateStudent from './pages/students/CreateStudent';

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
      </Routes>
    </Router>
  );
}

export default App;
