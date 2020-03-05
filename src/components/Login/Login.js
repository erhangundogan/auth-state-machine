import React from 'react';

const Login = ({ previousLogin = '', onRegister }) => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        <button onClick={ onRegister }>Click here for sign up</button>
      </p>
      <p>
        <input type="email" defaultValue={ previousLogin } />
      </p>
    </div>
  );
};

export default Login;
