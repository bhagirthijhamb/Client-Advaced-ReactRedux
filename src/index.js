import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';

ReactDOM.render(
  <BrowserRouter>
    <App>
      {/* whenever the App component is rendered, this Route will be passed to the App as a prop called children*/}
      <Route path='/' component={Welcome} />
    </App>
  </BrowserRouter> , document.querySelector('#root')
);