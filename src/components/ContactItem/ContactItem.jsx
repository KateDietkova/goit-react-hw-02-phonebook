import PropTypes from 'prop-types';
import { ButtonContactStyled, ContactInfo } from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <ButtonContactStyled type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ButtonContactStyled>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
