import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MY_PROFILE } from "../utils/queries";
import { REMOVE_PREFERENCE } from "../utils/mutations";
import Auth from "../utils/auth";
import { removeTagText } from "../utils/localStorage";
/* import { Link } from 'react-router-dom'; */

/*------------------------------------------------------------
-         COMPONENT: USER PREFRERENCES

------------------------------------------------------------*/
// import React, { Component } from 'react'

const options = [
  { value: "Miami", label: "Miami" },
  { value: "Houston", label: "Houston" },
  { value: "New York", label: "New York" },
  { value: "Las Vegas", label: "Las Vegas" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Atlanta", label: "Atlanta" },
  { value: "Chicago", label: "Chicago" },
  { value: "New Orleans", label: "New Orleans" },
  { value: "Baltimore", label: "Baltimore" },
  { value: "Nashville", label: "Nashville" },
  { value: "Guitar", label: "Guitar" },
  { value: "Classical", label: "Classical" },
  { value: "live gigs", label: "live gigs" },
  { value: "jazz", label: "jazz" },
  { value: "piano", label: "piano" },
  { value: "band", label: "band" },
  { value: "audition", label: "audition" },
  { value: "studio session", label: "studio session" },
  { value: "singer", label: "singer" },
  { value: "r&b", label: "r&b" },
  { value: "male", label: "male" },
  { value: "female", label: "female" },
  { value: "background vocalist", label: "background vocalist" },
  { value: "interview", label: "interview" },
  { value: "acoustic", label: "acoustic" },
  { value: "lounge", label: "lounge" },
  { value: "electronic/dance", label: "electronic/dance" },
  { value: "showcase", label: "showcase" },
  { value: "bass", label: "bass" },
  { value: "horns", label: "horns" },
  { value: "strings", label: "strings" },
  { value: "keyboards", label: "keyboards" },
  { value: "producer", label: "producer" },
  { value: "songwriter", label: "songwriter" },
  { value: "DJ", label: "DJ" },
  { value: "Agent/Manager", label: "Agent/Manager" },
  { value: "Label Rep", label: "Label Rep" },
  { value: "A&R", label: "A&R" },
  { value: "Competition", label: "Competition" },
  { value: "topline", label: "topline" },
  { value: "Emcee", label: "Emcee" },
  { value: "pop", label: "pop" },
  { value: "rock", label: "rock" },
  { value: "standards", label: "standards" },
  { value: "restaurant/bar", label: "restaurant/bar" },
  { value: "residency", label: "residency" },
  { value: "hiphop/rap", label: "hiphop/rap" },
  { value: "country", label: "country" },
  { value: "choral", label: "choral" },
  { value: "orchestra", label: "orchestra" },
  { value: "church", label: "church" },
  { value: "gig", label: "gig" },
  { value: "festival", label: "festival" },
];

const Preferences = () => {
  const { loading, data } = useQuery(QUERY_MY_PROFILE);
  const [removePreference] = useMutation(REMOVE_PREFERENCE);
  const userData = data?.me || {};
  <Select options={options} />;

  // create function that accepts the tags value as param and deletes the book from the database
  const handleDeletePreference = async (tagText) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removePreference({
        variables: { tagText: tagText },
      });
      // upon success, remove tags text from localStorage
      removeTagText(tagText);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <h2>
          {userData.savedPreferences.length
            ? `Viewing ${userData.savedPreferences.length} saved ${
                userData.savedPreferences.length === 1
                  ? "preference"
                  : "preferences"
              }:`
            : "You have no saved preferences!"}
        </h2>
        <div>
          {userData.savedPreferences.map((preference) => {
            return (
              <Button
                className="btn-block btn-danger"
                onClick={() => handleDeletePreference(preference.tagText)}
              >
                Delete this Preference!
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

//     <div className="">
//       <div className="">
//         <div className="">
//           <div className="">
//             <p>PREFERENCES</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Preferences;
