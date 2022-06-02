import React from "react";
import "./feed.css";

/*------------------------------------------------------------
-          COMPONENT: FEED
------------------------------------------------------------*/
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

            <div className='card-body'>

              <p>{comment.commentText}</p>
              <p className="mb-0">
                Replies: {comment.reactionCount} || Click to {' '}
                {comment.reactionCount ? 'see' : 'start'} the discussion!
              </p>

            </div>
          </div>
      ))}
    </div>
  )
};

export default Feed;
