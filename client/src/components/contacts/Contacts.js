import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Contacts = ({}) => {
  const [contacts, setContacts] = useState([])

  useEffect( () => {
    axios.get('/api/contacts')
      .then( res => {
        setContacts(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addContact = (contact) => {
    axios.post('/api/Contacts', { contact })
      .then( res => {
        setContacts([...contacts, res.data])
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Contacts Page</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </>
  )
}

export default Contacts;