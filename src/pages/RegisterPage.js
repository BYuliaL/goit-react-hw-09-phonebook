import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    // width: 320,
  },
  label: {
    color: 'white',
    fontSize: '16px',
  },
};

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 style={styles.title}>Registration page</h1>

        <Form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <Form.Group controlId="formName">
            <Form.Label style={styles.label}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label style={styles.label}>Mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Example@mail.com"
              name="email"
              value={email}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Button type="submit">Register</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
