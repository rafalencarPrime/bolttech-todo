
import React from 'react';
import { Alert, Card, Button, Form, Row} from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';

const RegisterPage = () => {

    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = { email, password};
    const success = await AuthService.register(data);

    if (success) {
      navigate('/login', { state: { showAlert: true } })
    }
    else setShowAlert(true);
  }

  return (
    <>
    {showAlert && <Alert variant="danger">Could not register the new user!</Alert>}
    <Card  style={{  padding: '1%', width: '50%', margin: '1%'}}>
      <Card.Header>
        <h3>Register</h3>
      </Card.Header> 
      <Card.Body>
        <Form >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <h5>Email</h5>
            <Form.Control value={email} type='email' placeholder="email@example.com" 
              onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <h5>Password</h5>
            <Form.Control value={password} type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Card.Footer>
    </Card>
    </>
  );
};

export default RegisterPage;
