import css from "./Contats.module.css";
import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/contacts/operations"
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id}>
      <div>
        <p>{name}: </p>
        <p>{number}</p>
      </div>
      <button className={css.buttonContacts} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

// Визначення типів пропсів за допомогою PropTypes
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default Contact;