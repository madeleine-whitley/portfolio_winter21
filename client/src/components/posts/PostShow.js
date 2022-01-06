import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

const PostShow = ({ id, title, body, mins, deletePost, updatePost }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h2>{title}</h2>
      <h4>Minutes to read: {mins}</h4>
      <p>{body}</p>
      { editing ?
        <>
          <PostForm
            id={id}
            title={title}
            mins={mins}
            body={body}
            updatePost={updatePost}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deletePost(id)}>Delete</button>
    </>
  )
}

export default PostShow;