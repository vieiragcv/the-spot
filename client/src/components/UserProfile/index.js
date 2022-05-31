import React from 'react';
/* import { Link } from 'react-router-dom'; */

/*------------------------------------------------------------
-          COMPONENT: USER PROFILE
------------------------------------------------------------*/

const UserProfile = ({ username }) => {

  return (
    <div className=''>
      <div className=''>
        <h5>{username}</h5>
        <p>Image</p>
        <p>soundcloud link</p>
        <p>spotify link</p>
      </div>

      <div className=''>
        <p>Image</p>
        <p>soundcloud link</p>
        <p>spotify link</p>
      </div>

      <div className=''>
        <p>OpenBio</p>
        <p>ClosedBio</p>
      </div>   
    <div>
      <p>Location</p>
    </div>
  </div>
  );
};

export default UserProfile;