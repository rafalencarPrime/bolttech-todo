
import React from 'react';

import TaskCreate from './TaskCreate';

import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import TaskService from '../../services/TaskService';

const ProjectCard = ({project}) => {

  const handleCheckBox = async (id, event) => {
    await TaskService.finishTask(id);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Header>{project.name}</Card.Header>
        <ListGroup className="list-group-flush">To Do
          {project.todo?.map((task) => (
            <ListGroupItem key={task._id}>
              <Form.Check
                type="checkbox"
                label={task.description}
                onChange={(event) => handleCheckBox(task._id, event)}
              />
            </ListGroupItem>))
          }
        </ListGroup>
        <ListGroup className="list-group-flush"> Done
          {project.done?.map((task) => (
            <ListGroupItem key={task.description}>
              <Form.Check
                checked
                disabled
                type="checkbox"
                label={task.description}
              />
            </ListGroupItem>))
          }
        </ListGroup>
        <TaskCreate projectId={project._id}></TaskCreate>
      </Card.Body>
    </Card>
  )
}
 
export default ProjectCard
