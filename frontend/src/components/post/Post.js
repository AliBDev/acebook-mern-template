import React from 'react';
import './Post.css'

const Post = ({post}) => {
  return (
    <article class="single-post-container" data-cy="post" key={post._id}>
        <div className="profile-picture-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/acebook-pic-files.appspot.com/o/images%2Fprofilepic%2Fdefaultprofilepics%2FWG.jpeg?alt=media&token=7de0a933-e9af-4921-8496-1e76ff23515a" alt='' />
        </div>

        <div class="message-container">
          <div class="message">{post.message}</div>
        </div>
        
        <div class="post-image-container">
          <img class="post-image" src={post.img} alt='' />
        </div>

        <div class="header-container">
          <div class="name-and-time-container">
            <div class="timestamp">{post.date}</div>
          </div>
        </div>
    </article>
  )
}

export default Post;
