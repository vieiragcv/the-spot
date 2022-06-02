import React from 'react';
import UserProfiles from '../components/UserProfiles';
import Profile from '../pages/Profile';
import Feed from '../components/Feed';

/* import Preferences from '../components/Preferences'; */
import Auth from '../utils/auth';

/*------------------------------------------------------------
-                     PAGES: HOME
------------------------------------------------------------*/

import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../utils/queries';

const Home = () => {

  const loggedIn = Auth.loggedIn();

  const { loading, data } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];
  console.log(comments);

    return (
    <main>
      {loggedIn && (
        <>
          <div>
               <Profile />
          </div>
        </>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
          <>
         
        <div className='grid-container'>
          
          <div className=''>
            <UserProfiles  />
          </div>

          <div className=''>
            <Feed />
          </div>
        </div>
          </>
      )}
    </main>
  );
};

export default Home;