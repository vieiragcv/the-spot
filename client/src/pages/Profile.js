import React from 'react';
import './assets/profile.css'
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';


/*------------------------------------------------------
-                     PAGES: PROFILE
------------------------------------------------------*/

import UserProfile from '../components/UserProfile';
const Profile = () => {
  
/*----------------USERNAME (gui, etc)-----------------*/

  const user = Auth.getProfile();
  const username = user.data.username;
  const email = user.data.email;

/*----------------CATEGORY (artist, etc)------------------*/

  const { data } = useQuery(QUERY_USER, {
    variables: { username: username }
  });
  const userCategory = data.user.category;
  
/*----------------OPEN BIO ---------------------------*/

  /* const userOpenBio = data.user.userOpenBio; */

/*----------------CLOSED BIO -------------------------*/

  /* const userClosedBio = data.user.closedBio; */

/*-----------------PROFILE IMG------------------------*/

  /* const userImage = data.user.userImg; */ 

  return(
    <div>
      <div className="flex-row mb-3">
        <h2 className="">
          This is {username}'s profile, his email is {email}. He is an {userCategory}
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <UserProfile />
        </div>
      </div>
    </div>
  )
};

export default Profile;