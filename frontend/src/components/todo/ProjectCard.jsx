
import React from 'react';

import TaskCreate from './TaskCreate';
import TaskService from '../../services/TaskService';

import { Card, Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import ProjectService from '../../services/ProjectService';

const ProjectCard = ({project, onUpdateProject, onRemoveProject}) => {

  const handleCheckBox = async (id) => {
    const finishedTask = await TaskService.finishTask(id);
    project.todo = project.todo.filter(task => task._id !== id);
    project.done.push(finishedTask);
    onUpdateProject(project);
  };

  const handleEdit = async (id, event) => {
    await ProjectService.changeProjectName();
    onUpdateProject();
  };

  const handleDelete = async () => {
    await ProjectService.deleteProject(project._id);
    onRemoveProject(project._id);
  };

  return (
    <Card style={{ paddingTop: '1%', width: '22rem', margin: '1%'}}>
      <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card.Title>{project.name}</Card.Title>
        <div>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Form.Group>
          <h6>To Do</h6>
          {project.todo?.map((task) => (  
            <Form.Check
            key={task._id}
              type="checkbox"
              label={task.description}
              onChange={(event) => handleCheckBox(task._id, event)}
            />
          ))}
        </Form.Group>
        <Form.Group> 
          <h6>Done</h6>
          {project.done?.map((task) => (
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-right">{task.finishedAt}</Tooltip>}>
              <Form.Check
                key={task._id}
                checked
                disabled
                type="checkbox"
                label={task.description}>
              </Form.Check>
            </OverlayTrigger>
          ))}
        </Form.Group>
      </Card.Body>
      <Card.Footer>
        <TaskCreate project={project} onUpdateProject={onUpdateProject}/>
      </Card.Footer>
    </Card>
  )
}
 
export default ProjectCard
