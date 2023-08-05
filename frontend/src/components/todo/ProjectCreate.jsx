
import { useState } from 'react';
import {Card, Button, Form} from 'react-bootstrap';

import ProjectService from '../../services/ProjectService';

const ProjectCreate = () => {

	const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await ProjectService.createProject({ name });
  };

  return (
    <Card style={{ width: '18rem' }}>
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
				<Button variant="primary" type="submit">Add</Button>
    </Form>
    </Card>
  )
}
 
export default ProjectCreate
