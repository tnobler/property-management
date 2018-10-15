import React, { Component } from 'react';

import SigninForm from '../auth/signinForm';

export default class NewNewsletter extends Component {

  onSubmit = (fields) => {
    console.log('trying to handle submit');
  }

  render () {
    return (
      <div className='new-newsletter'>
        <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}