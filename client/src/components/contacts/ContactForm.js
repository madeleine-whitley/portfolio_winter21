import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', phone: 0, email: '', company: '', comment: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    addContact(contact)
    setContact({ name: '', phone: 0, email: '', company: '', comment: '' })
  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          <FormControl 
          aria-label="Name" 
          aria-describedby="inputGroup-sizing-sm"
          name='name' 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value})}
          required
          placeholder="name"
        />
        </InputGroup>
      

        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Phone</InputGroup.Text>
        <FormControl 
          aria-label="Phone" 
          aria-describedby="inputGroup-sizing-sm"
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value})}
          required
          placeholder="phone" />
          </InputGroup>
        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
        <FormControl 
        aria-label="Email" 
        aria-describedby="inputGroup-sizing-sm"
        name='email'
        value={contact.email}
        onChange={(e) => setContact({...contact, email: e.target.value})}
        required
        placeholder="email"
        />
        </InputGroup>

        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Company</InputGroup.Text>
        <FormControl 
        aria-label="Company" 
        aria-describedby="inputGroup-sizing-sm"
        name='company'
        value={contact.company}
        onChange={(e) => setContact({...contact, company: e.target.value})}
        required
        placeholder="company"
        />
        </InputGroup>
        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Comment</InputGroup.Text>
        <FormControl 
        aria-label="Comment" 
        aria-describedby="inputGroup-sizing-sm"
        name='comment'
        value={contact.comment}
        onChange={(e) => setContact({...contact, comment: e.target.value})}
        required
        placeholder="comment"
        />
        </InputGroup>

        <Button variant="outline-dark">Submit</Button>
      </form>
      </Container>
    </>
  )
}

export default ContactForm;