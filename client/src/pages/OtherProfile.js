import React from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import AVATAR1 from './assets/images/jcooperavatar.jpg'
import './assets/profile.css'

/*------------------------------------------------------
-                     PROFILE (PAGES) 
------------------------------------------------------*/

const OtherProfile = (props) => {

  const { username: userParam } = useParams();
  console.log(userParam);

  
 /*  const loggedUser = Auth.getProfile(); */
/*   const username = loggedUser.data.username; */
 /*  console.log(username); */

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return(

   <section className="profile__container">
     <div className="profile__card">
     <article className="profile__bio"><h5>About Me:</h5>
        <p>For Everyone: {data.user.openBio}</p>
        <p>My Connections: {data.user.closedBio}</p>
        <h5>Preferences:</h5>
        <p>{data.user.preferences}</p>
     </article>
     <div>
       <img className="profile__images" src={AVATAR1} alt=''/>
     </div>
       <h3>{data.user.username} is an {data.user.category} in Miami, FL </h3>
     </div>
   </section>
  );
};

export default OtherProfile;