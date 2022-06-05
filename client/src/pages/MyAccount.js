
import React, {useState}  from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

/*------------------------------------------------------

-                     MY ACCOUNT (PAGES) 

- something still wrong with updateUser mutation (cries in JS)

------------------------------------------------------*/

const MyAccount = (props) => {
  const [formState, setFormState] = useState({ category: '', openBio: '', closedBio: '' });
  const [updateUser, {error}] = useMutation(UPDATE_USER);
  const user = Auth.getProfile();

    const handleChange = (event) => {
      const { name, value } = event.target ;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
        const {data} = await updateUser({
          variables: { ...formState }
        });   
        console.log(data);
        console.log('above me');
      }
      catch (e) {
        console.log('error error error');
        console.error(e);
      }
    };

  return (
    <div>
      <form className="card" onSubmit={handleFormSubmit}>
        <h3 className="form-header">Build Your Profile</h3>
        <label htmlFor="category">Category</label>
        <select 
          name='category' 
          className="form-input" 
          value={formState.openBio}
          onChange={handleChange} 
          aria-label=""
        >
          <option defaultValue>Open this select menu</option>
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
          <label htmlFor="open-bio">Open Bio:</label>
          <input
            className="form-input"
            name='openBio'
            type="text"
            placeholder="About you for everyone to see.."
            id="open-bio__field"
            value={formState.openBio}
            onChange={handleChange}
          />
        </div>
        <div className="fields">
          <label htmlFor="email-signup">Closed Bio:</label>
          <input
            className="form-input"
            name='closedBio'
            type="text"
            placeholder="Details only friends will see.."
            id="closed-bio__field"
            value={formState.closedBio}
            onChange={handleChange}
          />
        </div>
        <div className="fields">
          <label htmlFor="age-signup">Preferences:</label>
          <input name='preferences' className="form-input" type="text" id="preferences-menu" />
        </div>
        <button className='btn w-100' type='submit'> Update Profile </button>
      </form>
      {error && <div> Form Updat Error! </div> }
    </div>
  );
};

export default MyAccount;
