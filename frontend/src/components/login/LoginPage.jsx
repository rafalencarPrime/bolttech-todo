
import { useState } from 'react';
import { Card, Button, Form, Row} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

const LoginPage = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {

    try {
      e.preventDefault();
      e.stopPropagation();
      
      setSubmitDisabled(true);

      try {
        if (await auth.login({ email: email, password: password })) {
          navigate('/projects', { replace: true });
        }
        else {
          setLoginError(true);
        }
      }
      finally {
        setSubmitDisabled(false);
      }
    }
    catch (e) {
        console.error(e);
        setLoginError(true);
    }
  }

  return (
    <Card style={{ padding: '1%', width: '50%', margin: '1%'}}>
      <Card.Header>Login</Card.Header>
      { loginError && <div className='alert alert-danger text-center'>Login Error</div> }
      <Card.Body>
        <Form disabled={submitDisabled}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <h5>Email</h5>
            <Form.Control value={email} type='email' defaultValue="email@example.com" 
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
        <Link to='/register'>Register</Link>
      </Card.Footer>
    </Card>
  );
};

export default LoginPage;
