import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupFrom';

class Signup extends Component {

  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      console.log('navigate to dashboard');
      this.props.history.push('/dashboard');
    })
  }

  componentDidMount() {
    this.props.updateHeader('Welcome to HOA manager!', 'Please login to continue', false);
  }

  render() {
    return (
      <div className='sign-up'>
        <SignupForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(Signup);