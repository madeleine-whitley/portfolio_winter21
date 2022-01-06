import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

const BlogForm = ({ addBlog }) => {
  const [blog, setBlog] = useState({ title: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addBlog(blog)
    setBlog({ title: '', desc: '' })
  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
      <FormControl 
          aria-label="Title" 
          aria-describedby="inputGroup-sizing-sm"
          name='title' 
          value={blog.title}
          onChange={(e) => setBlog({...blog, title: e.target.value})}
          required
          placeholder="title"
        />
        </InputGroup>
        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
        <FormControl 
          aria-label="Description" 
          aria-describedby="inputGroup-sizing-sm"
          name='desc'
          value={blog.desc}
          onChange={(e) => setBlog({...blog, desc: e.target.value})}
          required
          /> 
          </InputGroup>
          
        <Button variant="outline-dark">Submit</Button>
      </form>
      </Container>
    </>
  )
}

export default BlogForm;