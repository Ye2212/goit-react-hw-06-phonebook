import propTypes from 'prop-types';
import Contact from "components/Contact/Contact";
import { ContactListEl, ContactListItem } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
    // console.log(contacts)
    return (
        <ContactListEl>

            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactListItem key={id}>
                        <Contact
                            name={name}
                            number={number}
                            onDeleteContact={onDeleteContact}
                            contactId={id}
                        />
                    </ContactListItem>
                );
            })}
        </ContactListEl>
    )
}

ContactList.propTypes = {
    contacts: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
    })),
    onDeleteContact: propTypes.func.isRequired,
}
export default ContactList;
