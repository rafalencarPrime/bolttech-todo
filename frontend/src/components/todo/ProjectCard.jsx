
import React from 'react';

import TaskCreate from './TaskCreate';

import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';

const ProjectCard = ({project}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Header>{project.name}</Card.Header>
        <ListGroup className="list-group-flush">To Do
          {project.todo?.map((task) => (
            <ListGroupItem key={task.description}>
              <Form.Check
                type="checkbox"
                label={task.description}
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
        <TaskCreate></TaskCreate>
      </Card.Body>
    </Card>
  )
}
 
export default ProjectCard
