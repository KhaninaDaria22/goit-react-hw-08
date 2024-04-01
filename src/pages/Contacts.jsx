import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import  ContactForm from '../components/ContactForm/ContactForm'
import {fetchContacts } from "../redux/contactsOps"
import { selectIsLoggedIn } from '../redux/auth/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoggedIn );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Your tasks</h1>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
