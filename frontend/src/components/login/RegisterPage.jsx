
import React from 'react';
import { Card, Button, Form, Row} from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService.js';

const RegisterPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();

      const data = { email, password};
      const userCreated = await AuthService.register(data);

      if (userCreated) {
        navigate('/login', { replace: true })
      }
      else {
        navigate('//error')
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  return (
    <Card  style={{  padding: '1%', width: '50%', margin: '1%'}}>
      <Card.Header>Register</Card.Header> 
      <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"
        value={email} onChange={(e) => setEmail(e.target.value)} required>
        <Form.Label>Email</Form.Label>
        <Form.Control plaintext defaultValue="email@example.com" />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
        value={password} onChange={(e) => setPassword(e.target.value)} required>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button type="submit" >Submit</Button>
    </Form>
    </Card>
  );
};

export default RegisterPage;
