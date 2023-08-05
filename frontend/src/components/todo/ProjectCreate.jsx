
import React from 'react';

import {Card, Button, Form} from 'react-bootstrap';

const ProjectCreate = () => {
  return (
    <Card style={{ width: '18rem' }}>
			<Card.Header>Create a new project</Card.Header>
			<Form>
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Enter a project"
					/>
				</Form.Group>
				<Button variant="primary">
					Add
				</Button>
			</Form>
    </Card>
  )
}
 
export default ProjectCreate
