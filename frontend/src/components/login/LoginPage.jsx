
import React from 'react';
import { Container, Button, Form, Row} from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control plaintext readOnly defaultValue="email@example.com" />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button>Submit</Button>
    </Form>
    </Container>
  );
};

export default LoginPage;
