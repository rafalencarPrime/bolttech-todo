
import ProjectCard from './ProjectCard';
import ProjectCreate from './ProjectCreate';
 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function ProjectContainer() {
  return (
    <Container>
			<Row>
				<ProjectCreate></ProjectCreate>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
			</Row>
    </Container>
  );
}
 
export default ProjectContainer;
