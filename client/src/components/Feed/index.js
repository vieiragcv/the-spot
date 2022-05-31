/* import Auth from '../../utils/auth'; */
import React from 'react';
/* import { Link } from 'react-router-dom'; */

const Feed = ({ comments, title }) => {

  if (!comments.length) {
    return <h2>No Comments found..</h2>
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments && 
        comments.map(comment => (
          <div key={comment._id} className='card mb-3'>
            <p className='card-header'>
              {comment.username} commented on {comment.createdAt}
            </p>
            <div className='card-body'>
              <p>{comment.commentText}</p>
              <p className="mb-0">
                Reactions: {comment.reactionCount} || Click to {' '}
                {comment.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
      ))}
    </div>
  )
};

export default Feed;