import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_MY_PROFILE } from '../../utils/queries';
import { Link } from 'react-router-dom';

/*------------------------------------------------------------
-          COMPONENT: USER PROFILE
------------------------------------------------------------*/

const UserProfile = () => {

/*   const {data: myData } = useQuery(QUERY_MY_PROFILE); */
/*   const myUsername = myData.me.username;
  console.log(myUsername); */
  
/*   const loggedIn = Auth.loggedIn(); */

  return (
    <div className=''>
      <div className=''>
        <div className=''>

            <div className=''>
{/*             <p>{myUsername}</p> */}
            <p>Image</p>
            <p>soundcloud link</p>
            <p>spotify link</p>
          </div>

          <div className=''>
            {/* <p>{myUsername}</p> */}
            <p>Image</p>
            <p>soundcloud link</p>
            <p>spotify link</p>
          </div>
        </div>

        <div className=''>
          <p>OpenBio</p>
          <p>ClosedBio</p>
        </div>
      </div>
      
      <div>
        <p>Location</p>
      </div>
    </div>
  );
};

export default UserProfile;