
import React from 'react';

import TaskCreate from './TaskCreate';
import TaskService from '../../services/TaskService';

import { Card, Form, Button } from 'react-bootstrap';
import ProjectService from '../../services/ProjectService';

const ProjectCard = ({project, onUpdateProject, onRemoveProject}) => {

  const handleCheckBox = async (id) => {
    await TaskService.finishTask(id);
    const updatedProject = {
      ...project,

    }
    onUpdateProject(updatedProject);

await TaskService.finishTask(id);
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
    <Card style={{ paddingTop: '1%', width: '18rem', margin: '1%'}}>
      <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card.Title>{project.name}</Card.Title>
        <div>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Form.Group>To Do
          {project.todo?.map((task) => (  
            <Form.Check
              type="checkbox"
              label={task.description}
              onChange={(event) => handleCheckBox(task._id, event)}
            />
          ))}
        </Form.Group>
        <Form.Group> Done
          {project.done?.map((task) => (
            <Form.Check
              checked
              disabled
              type="checkbox"
              label={task.description}
            />
          ))}
        </Form.Group>
        <TaskCreate project={project} onUpdateProject={onUpdateProject}/>
      </Card.Body>
    </Card>
  )
}
 
export default ProjectCard
