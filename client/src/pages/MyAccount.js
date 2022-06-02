import React from 'react';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

/*------------------------------------------------------

-                     MY ACCOUNT (PAGES) 

- currently a copy of Profile  
- will beused to edit user fields
------------------------------------------------------*/

const MyAccount = (props) => {
  
  const user = Auth.getProfile();
  const username = user.data.username;

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username }
  });
  console.log(data);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return(
    <div>
      <div className="flex-row mb-3">
        <h2 className="">
          {data.user.username}
        </h2>
        <h2 className="">
          {data.user.email}
        </h2>
        <h2 className="">
          {data.user.category}
        </h2>
        <h2 className="">
          {data.user.openBio}
        </h2>
        <h2 className="">
        <select class="form-control form-control-lg">
          <option>Category</option>
          <option>Artist</option>
          <option>Agent</option>
          <option>AandR</option>
          <option>Producer</option>
          <option>Venue</option>
          <option>Label Rep</option>
          <option>Studio</option>
          <option>Event</option>
        </select>
          {data.user.closedBio}
          <input class="form-control form-control-lg" type="text" placeholder="Closed Bio">{data.user.closedBio}</input>
        </h2>
        <h2 className="">
          {data.user.preferences}
        </h2>
      </div>
    </div>
  );
};

export default MyAccount;