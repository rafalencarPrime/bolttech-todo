
import './App.css';

import { Routes, Route } from 'react-router-dom';

import LoginPage from './components/login/LoginPage'; 
import RegisterPage from './components/login/RegisterPage';
import ProjectsPage from './components/todo/ProjectsPage';
import PrivateRoutes from './components/common/PrivateRoute';

function App() {

  return (
    <>
      <Routes> 
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path='/projects' element={<PrivateRoutes />}>
          <Route index element={<ProjectsPage />} />
        </Route>      
      </Routes>
    </>
  );
}
 
export default App;
