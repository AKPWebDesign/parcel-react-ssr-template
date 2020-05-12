import React from 'react';

import { Helmet } from 'react-helmet';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Helmet defaultTitle="Hello World!">
        <meta charSet="utf-8" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={() => (<span><Link to="/page2">wow!!!</Link></span>)} />
        <Route exact path="/page2" component={() => (<span>page 2! <Helmet><title>page 2</title></Helmet></span>)} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
