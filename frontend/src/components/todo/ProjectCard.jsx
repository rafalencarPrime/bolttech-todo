
import React from 'react';

import TaskCreate from './TaskCreate';
import TaskService from '../../services/TaskService';

import { Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import ProjectService from '../../services/ProjectService';

const ProjectCard = ({project}) => {

  const handleCheckBox = async (id, event) => {
    await TaskService.finishTask(id);
  };

  const handleEdit = async (id, event) => {
    await ProjectService.changeProjectName();
  };

  const handleDelete = async (id, event) => {
    await ProjectService.deleteProject();
  };

  return (
    <Card style={{ paddingTop: '1%', width: '18rem', margin: '1%'}}>
      <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card.Title>{project.name}</Card.Title>
        <div>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Header>
      <Card.Body>
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
