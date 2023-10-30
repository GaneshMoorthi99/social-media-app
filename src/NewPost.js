import React from 'react'

const NewPost = ({handleSubmit,setPostBody,setPostTitle,postBody,postTitle}) => {
  return (
    <div className='NewPost'>
      <h2>NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
        type='text'
        id='postTitle'
        required
        value={postTitle}
        onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <input
        type='text'
        id='postbody'
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>

      </form>
      
    </div>
  )
}

export default NewPost
