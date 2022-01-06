import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

const PostForm = ({ addPost, id, title, mins, body, updatePost, setEdit }) => {
  const [post, setPost] = useState({ title: '', body: '', mins: 0 })

  useEffect( () => {
    if (id) {
      setPost({ title, body, mins })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePost(id, post)
      setEdit(false)
    } else {
      addPost(post)
    }
    setPost({ title: '', body: '', mins: 0 })
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
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        </InputGroup>
        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Body</InputGroup.Text>
        <FormControl 
          aria-label="Body" 
          aria-describedby="inputGroup-sizing-sm"
          name='body'
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          required
        /></InputGroup>
      
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Minutes to Read</InputGroup.Text>
        <FormControl 
          aria-label="Minutes" 
          aria-describedby="inputGroup-sizing-sm"
          name='mins'
          value={post.mins}
          onChange={(e) => setPost({ ...post, mins: e.target.value })}
          required
          type="number"
        />
        </InputGroup>
        <button type="submit">Submit</button>
      </form>
      </Container>
    </>
  )
}

export default PostForm;