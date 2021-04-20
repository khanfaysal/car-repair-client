import React from 'react';
import GoogleAuthentication from '../GoogleAuthentication/GoggleAuthentication';
import './Login.css';

const Login = () => {
  return (
      <div className = "loginBoxOuter">
          <div className = "loginBoxInner shadow">
            <h4 className = "text-capitalize brand-txt text-center pt-5">Login with</h4>
            <GoogleAuthentication></GoogleAuthentication>
          </div>
        </div>
  );
};

export default Login;