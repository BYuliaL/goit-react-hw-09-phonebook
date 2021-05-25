import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import style from './Form.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const styles = {
  label: {
    color: 'white',
    fontSize: '16px',
  },
};

class formContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name } = this.state;

    event.preventDefault();

    const inputValue = this.props.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (inputValue) {
      alert(`Name '${name}' is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
    }
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <Row>
            <Col>
              <Form.Group controlId="formName">
                <Form.Label style={styles.label}>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formNumber">
                <Form.Label style={styles.label}>Namber</Form.Label>
                <Form.Control
                  value={this.state.number}
                  onChange={this.handleChange}
                  type="tel"
                  name="number"
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                ></Form.Control>
              </Form.Group>
            </Col>{' '}
          </Row>

          <Button className={style.form__button} type="submit">
            Add contact
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContacts(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formContacts);
