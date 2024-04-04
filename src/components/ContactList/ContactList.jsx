import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx"
import {  useSelector } from "react-redux";
// import { selectFilter } from "../redux/filtersSlice";
import {selectFilteredContacts} from "../../redux/contacts/selectors.js"
// import { deleteContact } from "../redux/contactsOps.js";
 

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.section}>
        <ul className={css.ulContacts}>
              {filteredContacts.map(({ name, id, number }) => (
                  <Contact  key={id} id={id} name={name} number={number} />
              ))}
        </ul>
    </div>
    
  );
};

export default ContactList;
