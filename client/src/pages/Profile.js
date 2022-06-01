import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

/*------------------------------------------------------
-                     PROFILE (PAGES) 
------------------------------------------------------*/

const Profile = (props) => {
  
  const user = Auth.getProfile();
  const username = user.data.username;
  console.log(username);

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username }
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  


  /* const userOpenBio = data.user.userOpenBio; */



  /* const userClosedBio = data.user.closedBio; */



  /* const userImage = data.user.userImg; */ 

  return(
    <div>
      <div className="flex-row mb-3">
        <h2 className="">
          {data.user.username}
        </h2>
        <h2 className="">
          {data.user.email}
        </h2>
        <h2 className="">
          {data.user.category}
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
        </div>
      </div>
    </div>
  );
};

export default Profile;