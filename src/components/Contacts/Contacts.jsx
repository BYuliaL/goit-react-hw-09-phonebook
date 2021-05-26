import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './Contacts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactsList}>
          {name}, {number}
          <Button
            className={styles.contactsList__button}
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
