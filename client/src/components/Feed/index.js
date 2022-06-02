<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import "./feed.css";
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8

/*------------------------------------------------------------
-          COMPONENT: FEED
------------------------------------------------------------*/
<<<<<<< HEAD

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
=======
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../../utils/queries';


const Feed = () => {

    const { loading, data } = useQuery(QUERY_COMMENTS);
    const comments = data?.comments || [];
    console.log(comments);

    if (!comments.length) {
      return <h2>No Comments found..</h2>;
    }

    if (loading) return 'Loading';

  return (
  

    <div className =''>

      <h3 className='card-header'>Popular discussions in your area!</h3>
      {comments && 
        comments.map(comment => (
          <div key={comment._id} className='card mb-1 p-1'>

            <h4 className=''> {comment.createdAt}: {comment.username} shared... </h4>
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8

            <div className='card-body'>

              <p>{comment.commentText}</p>
<<<<<<< HEAD
              
=======
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8
              <p className="mb-0">
                Replies: {comment.reactionCount} || Click to {' '}
                {comment.reactionCount ? 'see' : 'start'} the discussion!
              </p>

            </div>
<<<<<<< HEAD

=======
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8
          </div>
      ))}
    </div>
  )
};

<<<<<<< HEAD
export default Feed;
=======
export default Feed;
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8
