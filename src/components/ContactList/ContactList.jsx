import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { ContactListStyled, ContactListItemStyled } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactListItemStyled key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </ContactListItemStyled>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};


