
import { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

import ProjectService from '../../services/ProjectService';

const ProjectCreate = ({onNewProject}) => {

	const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const project = await ProjectService.createProject(name);
		onNewProject(project);
  };

  return (
    <Card style={{  paddingTop: '1%', width: '18rem', margin: '1%'}}>
			<Card.Header>Create a new project</Card.Header>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formBasicName">
					<Form.Control
						type="text"
						value={name}
						onChange={(event) => setName(event.target.value)}
						placeholder="Enter project name"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">Create a new project</Button>
    	</Form>
    </Card>
  )
}
 
export default ProjectCreate
