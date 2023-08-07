
import React, { useState} from 'react';

import { Button, Form, InputGroup } from 'react-bootstrap';

import TaskService from '../../services/TaskService';

const TaskCreate = ({project, onUpdateProject}) => {

  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTask = await TaskService.createTask(project._id, description);
    
    project.todo.push(newTask)
    
    onUpdateProject(project)
    setDescription('')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter task description"
        />
      <Button variant="primary" type="submit">Add</Button>
    </InputGroup>
    </Form>
  )
}
 
export default TaskCreate
