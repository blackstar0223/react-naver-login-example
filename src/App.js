import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NaverLogin from './components/NaverLogin';
import NaverLoginCallback from './components/NaverLoginCallback';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={NaverLogin} />
      <Route path="/login/naver/callback" component={NaverLoginCallback} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
