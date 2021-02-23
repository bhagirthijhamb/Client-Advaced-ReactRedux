import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token')} },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App>
        {/* whenever the App component is rendered, this Route will be passed to the App as a prop called children*/}
        <Route exact path='/' component={Welcome} />
        <Route path='/signup' component={Signup} />
        <Route path='/feature' component={Feature} />
      </App>
    </BrowserRouter> 
  </Provider>, document.querySelector("#root")
);