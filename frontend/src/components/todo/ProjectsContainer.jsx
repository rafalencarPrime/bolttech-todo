
import ProjectCard from './ProjectCard';
import ProjectCreate from './ProjectCreate';
 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import useProjects from '../../hooks/useProjects';

function ProjectContainer() {

	const [ projects ] = useProjects();

  return (
    <Container style={{ margin: '1%'}}>
			<Row>
				<ProjectCreate></ProjectCreate>
				{
					projects.map((project) => (
						<ProjectCard key={project._id} project={project}></ProjectCard>
				))}
			</Row>
    </Container>
  );
}
 
export default ProjectContainer;
