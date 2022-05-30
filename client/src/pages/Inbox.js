import Auth from '../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

/*------------------------------------------------------------
-         PAGES: INBOX
------------------------------------------------------------*/


const Inbox = () => {

return (
  <main className='flex-row justify-center'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Friend Requests</h4>
          <div className='card-body'>
          <p>You have been added by XXXXX , Accept?</p>
          </div>
        </div>
      </div>
  </main>
)

};

export default Inbox;