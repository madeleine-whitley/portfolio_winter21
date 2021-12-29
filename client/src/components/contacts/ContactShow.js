import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Services from '../services/Services';

const ContactShow = ({}) => {
  const [contact, setContact] = useState({name: '', phone: 0, email: '', company: '', comment: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/contacts/${params.contactId}`)
      .then( res => {
        setContact(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{contact.name}</h1>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>{contact.company}</p>
      <p>{contact.comment}</p>
      <p>{params.contactId}</p>
      <button>Edit</button>
      <button>Delete</button>
      {/* <Contacts contactId={params.contactId} /> */}
    </>
  )
} 

export default ContactShow;