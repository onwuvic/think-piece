import React, { useContext } from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { PostsContext } from '../providers/PostsProviders';

const Posts = () => {
  const posts = useContext(PostsContext);
  return (
    <section className="Posts">
      <AddPost 
        // onCreate={onCreate} 
        />
        {  
          posts.map(post => <Post {...post} key={post.id} 
            // onRemove={onRemove} 
          />)
        }
    </section>
  )
}

export default Posts;
