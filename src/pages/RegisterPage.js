import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const styles = {
  title: {
    color: 'white',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: '16px',
  },
};

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`This type of name - ${name} doesn't work out`);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    },
    [name, email, password, dispatch],
  );
  return (
    <div>
      <h1 style={styles.title}>Registration page</h1>

      <Form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Form.Group controlId="formName">
          <Form.Label style={styles.label}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label style={styles.label}>Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Example@mail.com"
            name="email"
            value={email}
            onChange={handleChange}
          ></Form.Control>
          <Form.Text style={{ color: '#07010c' }}>
            *We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label style={styles.label}>Password</Form.Label>{' '}
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);
