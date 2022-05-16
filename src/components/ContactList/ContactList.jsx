import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contacts-slice';
import Contact from 'components/Contact/Contact';
import { ContactListEl, ContactListItem } from './ContactList.styled';

function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filteredContacts();
  return (
    <ContactListEl>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={deleteSelectedContact}
              contactId={id}
            />
          </ContactListItem>
        );
      })}
    </ContactListEl>
  );
}

export default ContactList;
