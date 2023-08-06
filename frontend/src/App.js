
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from "./components/common/Header";
import LoginPage from './components/login/LoginPage'; 
import RegisterPage from './components/login/RegisterPage';
import ProjectsPage from './components/todo/ProjectsPage';

function App() {
  return (
    <>
      <Header/>
      <Routes> 
        <Route exact path="/" component={ProjectsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />    
      </Routes>
    </>
  );
}
 
export default App;
