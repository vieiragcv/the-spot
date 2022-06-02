import React from 'react';
import { Link } from 'react-router-dom';
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


  return (
    <div className=''>
      <h3 className='card-header '>Spotters in your area!</h3>
     {profiles && 
      profiles.map((user) => (
        <div key={user.username} className='card mb-1 p-1'> 
          <Link
            to={`/profile/${user.username}`}
            style={{ fontWeight: 700 }}
          >
            <h4 className=''> 
              @{user.username} | {user.category} | {user.location} 
            </h4>
            <div className='card-body'>
              <p>About Me: {user.openBio}</p>
              <p>Friends Only: {user.closedBio}</p>
            </div>
          </Link>

        </div>
        ))
      }
    </div>
  );
};

export default UserProfiles;