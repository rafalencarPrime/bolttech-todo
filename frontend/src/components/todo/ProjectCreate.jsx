
import { useState } from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';

import ProjectService from '../../services/ProjectService';

const ProjectCreate = ({onNewProject}) => {

	const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const project = await ProjectService.createProject(name);
		onNewProject(project);
  };

  return (
    <Card style={{  paddingTop: '1%', width: '22rem', margin: '1%'}}>
			<Card.Header>
				<h5>Create a new project</h5>
			</Card.Header>
			<Card.Footer>
				<Form onSubmit={handleSubmit}>
					<InputGroup className="mb-3">
						<Form.Control
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
							placeholder="Enter project name"
						/>
						<Button variant="primary" type="submit">+</Button>
					</InputGroup>
				</Form>
			</Card.Footer>
    </Card>
  )
}
 
export default ProjectCreate
