
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { useAuth } from './hooks/useAuth.js';
import Header from "./components/common/Header";
import LoginPage from './components/login/LoginPage'; 
import RegisterPage from './components/login/RegisterPage';
import ProjectsPage from './components/todo/ProjectsPage';
import PrivateRoutes from './components/common/PrivateRoute';

function App() {

  const auth = useAuth();

  return (
    <>
      {auth.user && <Header />}
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
