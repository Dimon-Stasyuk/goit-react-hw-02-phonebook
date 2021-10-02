import React from "react";
const shortid = require("shortid");

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    const currentInput = event.target.name;
    this.setState({
      [currentInput]: event.target.value,
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  addContact = (text, phone) => {
    const contact = {
      id: shortid.generate(),
      name: text,
      number: phone,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  checkName = () => {
    return this.state.contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(this.state.name.toLowerCase());
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.checkName()) {
      alert(`${this.state.name} уже добавлен в список контактов`);
      this.reset();
      return;
    }

    this.addContact(this.state.name, this.state.number);
    this.reset();
  };

  render() {
    const contactsFilter = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div className="App">
        <form action="" onSubmit={this.onSubmit}>
          <h2>Name</h2>
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <h2>Number</h2>
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <input
            onChange={this.changeFilter}
            value={this.state.filter}
            type="text"
            name="filter"
            required
          />
          <ul>
            {contactsFilter.map((contact) => {
              return (
                <li key={shortid.generate()}>
                  {contact.name}: {contact.number}
                  <button
                    type="button"
                    onClick={() => this.deleteContact(contact.id)}
                  >
                    Удалить
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
