import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS }from '../../utils/queries';

/*------------------------------------------------------------
-          COMPONENT: USER PROFILE
------------------------------------------------------------*/

const UserProfiles = () => {

  const { loading, error, data } = useQuery(QUERY_USERS);
  if (loading) return 'Loading....';
  if (error) return 'Error!';
  const profiles = data.users;
  console.log(profiles);

  return (
    <div className=''>
      <h3 className='card-header '>Spotters in your area!</h3>
     {profiles && 
      profiles.map((user) => (

        <div key={user.toString()} className='card mb-1 p-1'> 

          <h4 className=''> 
            @{user.username} | {user.category} | {user.location} 
          </h4>

          <div className='card-body'>
            <p>About Me: {user.openBio}</p>
            <p>Friends Only: {user.closedBio}</p>
          </div>

        </div>
        ))
      }
    </div>
  );
};

export default UserProfiles;