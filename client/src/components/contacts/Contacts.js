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
  const deleteContact = (id) => {
    axios.delete(`/api/contacts/${id}`)
      .then( res => {
        alert(res.data.message)
        setContacts(contacts.filter( p => p.id !== id ))
      })
      .catch( err => console.log(err))
  }

  const updateContact = (id, contact) => {
    axios.put(`/api/contacts/${id}`, { contact })
      .then( res => {
        const newUpdatedContact = contact.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        // setContacts(newUpdatedContacts)
        // edit works but needs to refresh
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Contacts Page</h1>
      <ContactForm addContact={addContact} />
      <ContactList 
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </>
  )
}

export default Contacts;