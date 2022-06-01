import React from 'react';
import Preferences from '../components/Preferences';
import UserProfile from '../components/UserProfile';
import Feed from '../components/Feed';


/*------------------------------------------------------------
-                     PAGES: HOME
------------------------------------------------------------*/
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_USER } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];
  console.log(comments);

  const { data: userData} = useQuery(QUERY_USER);
  const username = userData?.user || {};
/*   console.log(username); */


  
  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <UserProfile
            username={username.user} 
            />
          <Feed
            comments={comments}
          />
        </div>
      )}
    </main>
  );
};

export default Home;