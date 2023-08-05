
import React from 'react';

import { Button, Form } from 'react-bootstrap';

const TaskCreate = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
        	type="text"
          placeholder="Enter a task"
        />
      </Form.Group>
      <Button variant="primary">
        Add
      </Button>
    </Form>
  )
}
 
export default TaskCreate
