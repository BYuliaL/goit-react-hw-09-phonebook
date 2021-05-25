import { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

class ContactsPage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <Form />
        <h2 style={{ marginTop: '20px', color: '#fff' }}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
