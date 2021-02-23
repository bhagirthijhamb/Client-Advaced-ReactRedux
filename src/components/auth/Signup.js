import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions';

class Signup extends Component {
  // to make sure the user get automatically redirected to the Feature page upn signup
  // we pass a second argument (a callback) to the signup action creator that is called inside onSubmit.
  // this callback is automaticalled called up after the user successfully signs up.
  // Inside this callback function we do the navigation step that will send user to the feature route
  onSubmit = (formProps) => {
    // console.log(formProps);
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none" />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { errorMessage: state.auth.errorMessage }
}

// compose allows us to apply multiple HO Components to a single component with a much more attrative syntax.
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
