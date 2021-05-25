import PropTypes from 'prop-types';
// import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginTop: 15,
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    marginBottom: 15,
    // maxWidth: '320px',
  },
};

const Filter = ({ value, onChange }) => {
  return (
    <Form style={styles.form}>
      <Form.Label style={styles.label}>Find contacts by name:</Form.Label>
      <Form.Control
        style={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></Form.Control>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
