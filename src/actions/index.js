import AUTH_USER from './types';

export const signup = ({ email, password }) => {
  

  return (dispatch) => {

  }
}



// inside the action creator its our duty to always return an object that has a type and payload property
  // this action is sent to our middleware, our reducers. The reducers produce a new state that flows into our components
  // this process is facilitated by a function tied to redux called the dispatch function.
  // dispatch function belongs to redux. You give it an action, just a plain JS object with a type property.
  // dispatch function is going to automatically funnel that action object through our middleware and our reducers 
  // return {
    // type: AUTH_USER,
    // payload: '12441315151'
  // }

  // rather than returning an object, we return a function. This returned function is going to be called witha single argument (dispatch)
  // this is what redux-thunk allows us to do (we can wither return an action object or a function from our action creators)
  // by gaining the ability to returna function that gets called with dispatch, we gaint he ability to dispath as many actions we want from a single action creator (at any time as we wish).
  // we get total control over the dispatch process.

// redux-thunk is an alternative approach to asychronous action creators that is little different from redux-promise.
// with redux-promise we are still limited to returning one action. And that action has to have a promise on the payload property.
// redux-promise is little bit more straight forward but is also more limited.
// we can only ever return that one promise. With redux-thunk we can make as many requests as we want, we can wait as long as we want. We essentialy can do anything we want inside of our action creator.
// And only when we complete some request or we get back some data or we do some validation we have the option to dispatch some action.