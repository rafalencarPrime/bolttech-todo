
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

  return (
    <Container style={{ margin: '1%'}}>
			<Row>
				<ProjectCreate onNewProject={handleNewProject}></ProjectCreate>
				{
					projects.map((project) => (
						<ProjectCard key={project._id} project={project}></ProjectCard>
				))}
			</Row>
    </Container>
  );
}
 
export default ProjectPage;
