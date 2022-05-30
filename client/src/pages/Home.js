import React from 'react';
import Preferences from '../components/Preferences';
import UserProfile from '../components/UserProfile';
import Feed from '../components/Feed';

/*------------------------------------------------------------
-           PAGES: HOME
------------------------------------------------------------*/
const Home = () => {


  return (
    <main>
      <UserProfile />
      <Preferences />
      <Feed />
    </main>
  );
};

export default Home;