import React from "react";
import Preferences from "../components/Preferences";
import UserProfile from "../components/UserProfile";
import Feed from "../components/Feed";


/*------------------------------------------------------------
-                     PAGES: HOME
------------------------------------------------------------*/
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_USER } from '../utils/queries';

const Home = () => {
<<<<<<< HEAD
  return (
    <main>
      <UserProfile />
      <div styles={styles.app}>
        <Preferences />
      </div>
      <Feed />
=======

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
>>>>>>> ed95d642511021660f54c763cca68cabbe6bf6ee
    </main>
  );
};

export default Home;
