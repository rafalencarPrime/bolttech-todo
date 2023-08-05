
import React from 'react';

import TaskCreate from './TaskCreate';

import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';

const ProjectCard = ({project}) => {

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
      <Card.Header>{project.name}</Card.Header>
        <ListGroup className="list-group-flush">To Do
          <ListGroupItem>
            <Form.Check
              type="checkbox"
              label="task to do example"
            />
            </ListGroupItem>
        </ListGroup>
        <ListGroup className="list-group-flush"> Done
          <ListGroupItem>
            <Form.Check
              checked
              disabled
              type="checkbox"
              label="task done example"
            />
            </ListGroupItem>
        </ListGroup>
        <TaskCreate></TaskCreate>
      </Card.Body>
    </Card>
  )
}
 
export default ProjectCard
