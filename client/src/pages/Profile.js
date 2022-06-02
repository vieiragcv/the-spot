import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import './assets/profile.css'
import AVATAR1 from './assets/images/jcooperavatar.jpg'



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

   <section className="profile__container">
     <div className="profile__card">
     <article className="profile__bio"><h5>About Me:</h5>
        <p>{data.user.openBio}</p>
        <h5>Preferences:</h5>
        <p>{data.user.preferences}</p>
     </article>
     <div>
       <img className="profile__images" src={AVATAR1} alt=''/>
     </div>
       <caption><h3>{data.user.username}</h3></caption>
       <caption><h4>{data.user.category}</h4></caption>
     </div>
   </section>
  );
};

export default Profile;