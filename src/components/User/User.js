import React from 'react';

const User = ({ email }) => {
  return (
    <div>
      <h1>User Page</h1>
      <p>{ email }</p>
    </div>
  );
};

export default User;
