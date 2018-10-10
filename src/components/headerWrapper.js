import React, { Component } from 'react';

export default class HeaderWrapper extends Component {
  render () {
    return (
      <div className='header-wrapper'>
         <h1>Welcome to HOA manager!</h1>
         <p>Please login to continue</p>
         {this.props.children}
      </div>
    );
  }
}