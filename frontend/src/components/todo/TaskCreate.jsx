
import React, { useState} from 'react';

import { Button, Form } from 'react-bootstrap';

import TaskService from '../../services/TaskService';

const TaskCreate = ({projectId}) => {

  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await TaskService.createTask(projectId, description);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
				<Form.Control
					type="text"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
					placeholder="Enter task description"
				/>
			</Form.Group>
			<Button variant="primary" type="submit">Add</Button>
    </Form>
  )
}
 
export default TaskCreate
