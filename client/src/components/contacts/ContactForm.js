import { useState, useEffect } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', phone: 0, email: '', company: '', comment: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contact)
    setContact({ name: '', phone: 0, email: '', company: '', comment: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          name='name' 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value})}
          required
          placeholder="name"
        />
        <br />
        <label>Phone:</label>
        <input
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value})}
          required
          placeholder="phone"
        />
        <br />
        <label>Email:</label>
        <input
        name='email'
        value={contact.email}
        onChange={(e) => setContact({...contact, email: e.target.value})}
        required
        placeholder="email"
        />
        <br />
        <label>Company:</label>
        <input
        name='company'
        value={contact.company}
        onChange={(e) => setContact({...contact, company: e.target.value})}
        required
        placeholder="company"
        />
        <br />
        <label>Comment:</label>
        <input
        name='comment'
        value={contact.comment}
        onChange={(e) => setContact({...contact, comment: e.target.value})}
        required
        placeholder="comment"
        />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;