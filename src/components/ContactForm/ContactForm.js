import PropTypes from "prop-types";
import React from "react";
import "./ContactForm.css";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  checkName = (name) => {
    return this.props.contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(name.toLowerCase());
  };

  onSubmit = (event) => {
    const { name } = this.state;

    event.preventDefault();
    if (this.checkName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleInputChange = (event) => {
    const currentInput = event.target.name;
    this.setState({
      [currentInput]: event.target.value,
    });
  };

  render() {
    const { onSubmit, handleInputChange } = this;
    const { number, name } = this.state;
    return (
      <form action="" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={handleInputChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;
