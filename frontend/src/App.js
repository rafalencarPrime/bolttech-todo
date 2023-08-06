
import './App.css';
import Header from "./components/common/Header";
import ProjectsContainer from './components/todo/ProjectsContainer';
import LoginPage from './components/login/LoginPage'; 

function App() {
  return (
    <div className="App">
       <Header></Header>
       <LoginPage></LoginPage>
       {/* <ProjectsContainer></ProjectsContainer> */}
    </div>
  );
}
 
export default App;
