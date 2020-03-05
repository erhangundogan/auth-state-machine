import React from 'react';

const Register = ({ onLogin }) => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        <button onClick={ onLogin }>Click here for Login</button>
      </p>
      <p>
        <input type="email" />
      </p>
    </div>
  );
};

export default Register;
