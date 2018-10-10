import React, { Component } from 'react';

import SignupForm from './signupFrom';

export default class Signup extends Component {
  render () {
    return (
      <div className='sign-up'>
         <SignupForm/>
      </div>
    );
  }
}