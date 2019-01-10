import React from 'react';
import authMethods from '../../../helpers/authMethods/authMethods';
import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div>
        <h3 onClick={authMethods.googLogin}>Log in with Google</h3>
      </div>
    );
  }
}

export default Auth;
