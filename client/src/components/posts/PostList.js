
import { Link } from 'react-router-dom';
import PostShow from './PostShow';

const PostList = ({ posts, blogId, deletePost, updatePost }) => {
  return (
    <>
      { posts.map( p => 
        <>
          <PostShow 
            {...p} 
            blogId={blogId} 
            deletePost={deletePost} 
            updatePost={updatePost}
          />
        </> 
      )}
    </>
  )
}

export default PostList;