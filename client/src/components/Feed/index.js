import React from "react";
import "./feed.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules


/*------------------------------------------------------------
-          COMPONENT: FEED
------------------------------------------------------------*/

const Feed = ({ comments }) => {
  if (!comments.length) {
    return <h2>No Comments found..</h2>;
  }

  return (
    <Swiper
    direction={"vertical"}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="container feed__container">
     
      <div className="feed__card">

        {comments &&
          comments.map((comment) => { return (
            <SwiperSlide key={comment._id} className="card mb-3">
              <p className="card-header">
                {comment.username} commented on {comment.createdAt}
              </p>
              <div className="card-body">
                <p>{comment.commentText}</p>
                <p className="mb-0">
                  Reactions: {comment.reactionCount} || Click to{" "}
                  {comment.reactionCount ? "see" : "start"} the discussion!
                </p>
              </div>
            </SwiperSlide> 
          )}
          )}
          
          
      </div>
    </Swiper>
  );
};

export default Feed;
