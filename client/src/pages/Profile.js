import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

/*------------------------------------------------------
-                     PROFILE (PAGES) 
------------------------------------------------------*/

const Profile = (props) => {
  
  const loggedUser = Auth.getProfile();
  const username = loggedUser.data.username;

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username }
  });
  console.log(data);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return(
    <div className='grid-container'>
      <div className="">

        <h2 className="card-header">
          {data.user.username}
        </h2>
        <h2 className="card-body">
          {data.user.email}
        </h2>
        <h2 className="card-body">
          {data.user.category}
        </h2>
        <h2 className="card-body">
          {data.user.openBio}
        </h2>
        <h2 className="card-body">
          {data.user.closedBio}
        </h2>
        <h2 className="card-body">
          {data.user.preferences}
        </h2>

      </div>
    </div>
  );
};

export default Profile;