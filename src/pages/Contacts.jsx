import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import  ContactForm from '../components/ContactForm/ContactForm'
import {fetchContacts } from "../redux/contactsOps"
import SearchBox from '../components/SearchBox/SearchBox';

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <> 
      <ContactForm />
        <SearchBox/>
         <ContactList />
    </>
  );
}
