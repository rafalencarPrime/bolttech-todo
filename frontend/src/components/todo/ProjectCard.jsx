
import { useState } from 'react';
import TaskCreate from './TaskCreate';
import TaskService from '../../services/TaskService';

import { InputGroup, Container, Card, Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import ProjectService from '../../services/ProjectService';

import { Trash, Pencil } from 'react-bootstrap-icons';

const ProjectCard = ({project, onUpdateProject, onRemoveProject}) => {

  const [editMode, setEditMode] = useState(false);

  const [projectName, setProjectName] = useState(project.name);

  const handleCheckBox = async (id) => {
    const finishedTask = await TaskService.finishTask(id);
    project.todo = project.todo.filter(task => task._id !== id);
    project.done.push(finishedTask);
    onUpdateProject(project);
  };

  const handleEdit = async (event) => {
    if(editMode){
      const updateProject = await ProjectService.changeProjectName(project._id, projectName);
      onUpdateProject(updateProject);
      setEditMode(false);
    }
    else{
      setEditMode(true);
    }
  };

  const handleDeleteProject = async () => {
    await ProjectService.deleteProject(project._id);
    onRemoveProject(project._id);
  };

  // const handleDeleteTask = async (id) => {
  //   await TaskService.deleteTask(id);
  //   project.todo = project.todo.filter(task => task._id !== id);
  //   onUpdateProject(project);
  // };

  const handleDate = (date) => {
    const splitDate = date.substring(0,10).split('-');
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
  };

  return (
    <Card style={{ paddingTop: '1%', width: '22rem', margin: '1%'}}>
      <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        {!editMode && <Card.Title style={{ width: '15rem'}}>{projectName}</Card.Title>}
        {editMode && <Form disabled={!editMode}>
          <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Control value={projectName} type='text'
                onChange={(e) => setProjectName(e.target.value)} required/>
            </Form.Group>
          </Form>}
        <Container style={{ width: '10rem', display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleEdit}>
            <Pencil/>
          </Button>
          <Button onClick={handleDeleteProject} variant="danger">
            <Trash/>
          </Button>
        </Container>
      </Card.Header>
      <Card.Body>
        <Form.Group>
          <h6>To Do</h6>
          {project.todo?.map((task) => (
            // <InputGroup style={{display: 'flex', justifyContent: 'space-between' }}>
              <Form.Check
                key={task._id}
                type="checkbox"
                label={task.description}
                onChange={(event) => handleCheckBox(task._id, event)}
              />
            //   <Button style={{ margin:'1%'}} onClick={(e) => handleDeleteTask(task._id)} variant="danger">
            //     <Trash />
            //   </Button>
            // </InputGroup>
          ))}
        </Form.Group>
        <Form.Group> 
          <h6>Done</h6>
          {project.done?.map((task) => (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id={task._id}>Finished at: {handleDate(task.finishedAt)}</Tooltip>}>
              <Container>
              <Form.Check
                key={task._id}
                checked
                disabled={true}
                type="checkbox"
                label={task.description}>
              </Form.Check>
                </Container>

              
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
