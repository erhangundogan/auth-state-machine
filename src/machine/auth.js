import { Machine } from 'xstate';

const auth = Machine({
  id: 'auth',
  initial: 'init',
  context: {
    localStorageKey: 'previousLogin'
  },
  states: {
    init: {
      invoke: {
        src: 'isLoggedIn',
        onDone: 'customer',
        onError: 'anonymous'
      }
    },
    anonymous: {
      invoke: {
        id: 'anonymous',
        src: 'getPreviousLogin',
        onDone: 'login',
        onError: 'register'
      }
    },
    customer: {
      invoke: {
        id: 'customer',
        src: 'getCustomerData',
        onDone: 'home',
        onError: 'login'
      }
    },
    home: {
      id: 'home'
    },
    login: {
      id: 'login',
      on: {
        REGISTER: 'register'
      }
    },
    register: {
      id: 'register',
      on: {
        LOGIN: 'login'
      }
    }
  }
},{
  services: {
    isLoggedIn: (context, event) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject()
        }, 2000);
      });
    },
    getCustomerData: (context, event) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ email: 'john.smith@example.com' });
        }, 2000);
      });
    },
    getPreviousLogin: (context, event) => {
      return new Promise((resolve, reject) => {
        const { localStorageKey } = context;
        const previousLogin = localStorage.getItem(localStorageKey);
        if (previousLogin) {
          return resolve({ previousLogin });
        }
        return reject({ message: 'No previous login data!' });
      });
    }
  }
});

export default auth;
