
import ProjectCard from './ProjectCard';
import ProjectCreate from './ProjectCreate'
 
import Container from 'react-bootstrap/Container';

function ProjectContainer() {
  return (
    <Container>
      <ProjectCard></ProjectCard>
      <ProjectCreate></ProjectCreate>
    </Container>
  );
}
 
export default ProjectContainer;
