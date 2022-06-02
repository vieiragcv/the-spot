import React from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

/*------------------------------------------------------

-                     MY ACCOUNT (PAGES) 

- currently a copy of Profile  
- will beused to edit user fields
------------------------------------------------------*/

const MyAccount = (props) => {
  const user = Auth.getProfile();
  const username = user.data.username;

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username },
  });
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <form className="card">
      <h3 className="form-header">Build Your Profile</h3>
      <label for="category">Category</label>
      <select className="" aria-label="">
        <option selected>Open this select menu</option>
        <option value="1">Artist</option>
        <option value="2">Agent/Manager</option>
        <option value="3">AandR</option>
        <option value="4">Producer</option>
        <option value="5">Venue</option>
        <option value="6">Label Rep</option>
        <option value="7">Studio</option>
        <option value="8">Event</option>
      </select>
      <div className="fields">
        <label for="open-bio">Open Bio:</label>
        <input
          className="input"
          type="text"
          placeholder="Open Bio"
          id="open-bio__field"
        />
      </div>
      <div className="fields">
        <label for="email-signup">Closed Bio:</label>
        <input
          className="input"
          type="text"
          placeholder="Closed Bio"
          id="closed-bio__field"
        />
      </div>
      <div className="fields">
        <label for="age-signup">Preferences:</label>
        <input className="input" type="text" id="preferences-menu" />
      </div>
    </form>
  );
};

export default MyAccount;
