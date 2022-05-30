import React from 'react';
import Preferences from '../components/Preferences';
import UserProfile from '../components/UserProfile';
import Feed from '../components/Feed';

/*------------------------------------------------------------
-           PAGES: HOME
------------------------------------------------------------*/
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_MY_PROFILE } from '../utils/queries';

const Home = () => {

/*   const { data: userData } = useQuery(QUERY_MY_PROFILE);
  const loggedIn = Auth.loggedIn(); */

  return (
    <main>
      <UserProfile
/*         username={userData.me.username} */
      />
      <Preferences />
      <Feed />
    </main>
  );
};

export default Home;