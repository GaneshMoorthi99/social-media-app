import React from 'react';
import { useParams ,Link} from 'react-router-dom';

const PostPage = ({posts,handleDelete}) => {

  const {id}=useParams();
  const post=posts.find((post)=>(post.id).toString()===id);

  return (
    <div className='PostPage'>
      <div className='post'>
        {post &&
        <>
         <h2>{post.title}</h2>
         <p className='PostData'>{post.datetime}</p>
         <p className='postBody'>{post.body}</p>
         <button  onClick={()=>handleDelete(post.id)}>Delete post</button>
          
        </>
        
        }
        {!post &&
         <>
          <h2>page not found</h2>
          <p>well thats disappointing</p>
          <p>
            <Link to='/'>visit our page</Link>
          </p>
         </>
        
        }
      </div>
       
      
      
      
    </div>
  )
}

export default PostPage
