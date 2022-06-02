<<<<<<< HEAD
/* import Auth from '../../utils/auth'; */
import React from "react";

/* import { Link } from 'react-router-dom'; */

const Feed = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <p>FEED</p>
=======
import React from 'react';

/*------------------------------------------------------------
-          COMPONENT: FEED
------------------------------------------------------------*/

const Feed = ({ comments }) => {

  if (!comments.length) {
    return <h2>No Comments found..</h2>
  }

  return (
    <div className ='card-header'>
      <h3>Popular in Your Area</h3>
      {comments && 
        comments.map(comment => (

          <div key={comment._id} className='card mb-3'>
            
            <p className=''>
            {comment.createdAt}: {comment.username} shared...
            </p>

            <div className='card-body'>

              <p>{comment.commentText}</p>
              
              <p className="mb-0">
                Replies: {comment.reactionCount} || Click to {' '}
                {comment.reactionCount ? 'see' : 'start'} the discussion!
              </p>

            </div>

>>>>>>> ed95d642511021660f54c763cca68cabbe6bf6ee
          </div>
      ))}
    </div>
  )
};

export default Feed;
