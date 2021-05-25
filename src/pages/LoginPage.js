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
  },
  label: {
    color: 'white',
    fontSize: '16px',
  },
};

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 style={styles.title}>Login page</h1>

        <Form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <Form.Group controlId="formEmail">
            <Form.Label style={styles.label}>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Example@mail.com"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label style={styles.label}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
