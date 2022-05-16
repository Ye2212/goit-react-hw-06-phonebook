import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import SectionComponent from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Message from './components/Message/Message';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <SectionComponent>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contact List</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message message="Contact list is empty." />
      )}
    </SectionComponent>
  );
}

export default App;
