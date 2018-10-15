import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

export default class NewNewsletter extends Component {

  onSubmit = (fields) => {
    console.log('trying to handle submit');
  }

  render () {
    return (
      <div className='new-newsletter'>
        <NewNewsletterForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}