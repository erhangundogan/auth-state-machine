import React, { useCallback } from 'react';
import { useMachine } from '@xstate/react';
import auth from '../../machine/auth';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Register from '../Register/Register';
import './styles.css';

const App = () => {
  const [current, send] = useMachine(auth);
  const onRegister = useCallback(() => send('REGISTER'), [send]);
  const onLogin = useCallback(() => send('LOGIN'), [send]);

  switch (current.value) {
    case 'register': {
      return (
        <div className="container">
          <Register onLogin={ onLogin } />
        </div>
      );
    }
    case 'login': {
      const { previousLogin } = current.event.data || {};
      return (
        <div className="container">
          <Login previousLogin={ previousLogin } onRegister={ onRegister } />
        </div>
      );
    }
    case 'home': {
      const { email } = current.event.data;
      return (
        <div className="container">
          <Home email={ email }/>
        </div>
      );
    }
    default: {
      return <div className="container">loading...</div>
    }
  }
};

export default App;
