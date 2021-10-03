import PropTypes from "prop-types";
import "./ContactList.css";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span className="name"> {name}:</span>
            <span className="tel"> {number}</span>
            <button
              type="button"
              className="contact-btn btn"
              onClick={() => removeContact(id)}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func,
};

export default ContactList;
