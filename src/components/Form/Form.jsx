import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import style from './Form.module.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const styles = {
  label: {
    color: 'white',
    fontSize: '16px',
  },
};

export default function ContactsForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const allContacts = useSelector(contactsSelectors.getItems);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const inputValue = allContacts
        .map(contact => contact.name.toLowerCase())
        .includes(name.toLowerCase());

      if (inputValue) {
        alert(`Name '${name}' is already in contacts`);
      } else {
        dispatch(contactsOperations.addContacts({ name, number }));
      }

      reset();
    },
    [name, number, dispatch, allContacts],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label style={styles.label}>Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={handleNameChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formNumber">
              <Form.Label style={styles.label}>Namber</Form.Label>
              <Form.Control
                required
                value={number}
                onChange={handleNumberChange}
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
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

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
