
import './App.css';
import Header from "./components/common/Header";
import ProjectsContainer from './components/todo/ProjectsContainer';
 
function App() {
  return (
    <div className="App">
       <Header></Header>
       <ProjectsContainer></ProjectsContainer>
    </div>
  );
}
 
export default App;
