import PropTypes from 'prop-types';
// import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = e => dispatch(changeFilter(e.currentTarget.value));

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
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
