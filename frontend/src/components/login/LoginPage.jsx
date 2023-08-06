
import { useState } from 'react';
import { Container, Button, Form, Row} from 'react-bootstrap';

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
    <Container>
      { loginError && <div className='alert alert-danger text-center'>Login Error</div> }
      <Form disabled={submitDisabled}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} plaintext defaultValue="email@example.com" 
          onChange={(e) => setEmail(e.target.value)} required autoFocus />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>

    <div>
      <Link to='/register'>Register</Link>
    </div>
    </Container>
  );
};

export default LoginPage;
