import React from 'react';


/*------------------------------------------------------------
-          COMPONENT: USER PROFILE
------------------------------------------------------------*/


const UserProfile = ({ username }) => {

/*   const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam}
  });

  const user = data?.user || {};
  console.log(user); */

/*   if (loading) {
    return <div> Content is Loading....</div>
  } */

  return (
    <div className=''>
      <h3>{username}</h3>
  </div>
  );
};

export default UserProfile;