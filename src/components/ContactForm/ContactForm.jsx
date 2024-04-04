import { useDispatch} from "react-redux";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleNumberChange = (e) => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert("Please enter both name and number");
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <form className={css.divForm} onSubmit={handleSubmit}>
        <label className={css.labelForm}>
          Name
          <input className={css.inputform}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleNameChange}
            required
          />
        </label>
        <label className={css.labelForm}>
          Number
          <input className={css.inputform}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberChange} />
        </label>
        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;