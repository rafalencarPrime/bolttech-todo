
import ProjectCard from './ProjectCard';
import ProjectCreate from './ProjectCreate';
 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import useProjects from '../../hooks/useProjects';

function ProjectPage() {

	const [ projects, setProjects ] = useProjects();

	const handleNewProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject]);
  }

	const handleUpdateProject= (id, newProject) => {
    const newProjects = projects.map(project => {
      if (project._id === id) {
        return { ...project, newProject };
      }
      return project;
    });
    setProjects(newProjects);
  }
	
	const handleRemoveProject = (id) => {
    const newProjects = projects.filter(project => project._id !== id);
    setProjects(newProjects);
  }

  return (
    <Container style={{ margin: '1%'}}>
			<Row>
				<ProjectCreate onNewProject={handleNewProject}></ProjectCreate>
				{
					projects.map((project) => (
						<ProjectCard key={project._id} project={project}
							onUpdateProject={handleUpdateProject}
							onRemoveProject={handleRemoveProject}
						/>
				))}
			</Row>
    </Container>
  );
}
 
export default ProjectPage;
