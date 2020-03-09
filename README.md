# Auth State Machine

Create-react-app instance with the minimal state machine to demonstrate auth
process (login, register) and redirect to home page with router integration.

## Motivation

I think authentication related stuff such as components, context and so on
should be separated from application logic. Because when your user logged in
these authentication part is over. They are not necessary anymore. Their
existence would pollute your react app (for example auth context will be
sitting on top, same as routes without usage).

So I believe we can have lean and simpler react apps if we can separate auth
part or keep it in minimal usage. This is a similar approach like Auth0 but for
F/E. As you know Auth0 removes the auth related complexity from your backend.

State machines are the key element to achieve this idea. My project is a
draft proposal for this idea. It has minimal implementation at the moment.

Please see the state machine rules [here](src/machine/auth.js)

You can change [this line of code](https://github.com/erhangundogan/auth-state-machine/blob/master/src/machine/auth.js#L64) to `resolve()` OR `reject()` to simulate registered and anonymous user.

Install
=======

```bash
yarn
```

Run
=======

```bash
yarn start
```
