// import { Component } from 'react';
import { useState, useEffect } from 'react';
import SectionComponent from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Message from './components/Message/Message';
import contactsData from './data/contacts.json';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    parsedContacts ? setContacts(parsedContacts) : setContacts([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const changeFilter = e => setFilter(e.currentTarget.value);
  const filteredContactList = () => {
    const normilizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
  };

  return (
    <SectionComponent>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contact List</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContactList()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message message="Contact list is empty." />
      )}
    </SectionComponent>
  );
}

// class App extends Component {

//   state = {
//     contacts:
//       contacts,
//     filter: '   ',
//   }

//   addContact = ({ name, number }) => {
//     // console.log("App: ", { name, number });
//     const { contacts } = this.state;
//     // console.log(contacts)
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
//       ?
//       alert(`${name} is already in contacts`)
//       :
//       this.setState(({ contacts }) => ({
//         contacts: [newContact, ...contacts],
//       }))

//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(
//         contact => contact.id !== contactId),
//     }));
//   };
//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   filteredContactList = () => {
//     const { filter, contacts } = this.state;
//     const normilizedValue = filter.toLowerCase().trim();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedValue))
//   }

//   render() {
//     console.log(this.state.contacts.length);
//     const { length } = this.state.contacts;
//     const { filter } = this.state;
//     return (
//       <SectionComponent>

//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contact List</h2>
//         <Filter
//           value={filter}
//           changeFilter={this.changeFilter} />
//         {
//           length > 0 ? (
//             <ContactList
//               contacts={this.filteredContactList()}
//               onDeleteContact={this.deleteContact}
//             />
//           ) : (<Message message="Contact list is empty." />)
//         }

//       </SectionComponent >
//     );
//   }

// };

export default App;
