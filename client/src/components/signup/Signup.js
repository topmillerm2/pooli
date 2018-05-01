import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { LockAlertIcon } from "mdi-react";
import _ from "lodash";
import * as actions from "../../actions/index";
import SignUpField from "./SignUpField";
import formFields from "./formFields";

class Signup extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type, placeholder }) => {
      return (
        <Field
          key={name}
          component={SignUpField}
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      );
    });
  }

  renderEmailAndPassword() {
    return;
  }

  onSubmit = values => {
    this.props.onSignUp(values, this.props.history);
  };

  render() {
    return <div className="section1" id="form">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {/* <form onSubmit={this.props.handleSubmit(values => console.log(values) */}
          )}>
          <div className="form-sec">
            <h2 className="text-2">
              Please provide a few details about yourself
            </h2>
            {this.renderFields()}
          </div>
          <div className="form-sec">
            <h2 className="text-2">Save Your Information</h2>
            <div>
              Email Address:
              <Field className="form-in" component="input" name="email" type="text" placeholder="email@example.com" />
            </div>
            <div>
              Password:
              <Field className="form-in" component="input" name="password" type="password" />
            </div>
            <h5 style={{ color: "orange" }}>
              Must contain at least 8 characters, including 1 number and 1
              uppercase letter
            </h5>
          </div>
          <div className="form-sec">
            <div>
              <input type="checkbox" name="accept request" /> By checking the box, clicking "agree and see your rate" below, you confirm:
            </div>
            <ul>
              <li>
                You agree to the <a href="#">
                  Electronic Communications Policy and Consent
                </a> and understand that the terms and conditions and other disclosures will be provided to you electronically; and
              </li>
              <li>
                You agree to the <a className="terms" href="#">
                  Credit Report and Information Verification Consent
                </a>, the <a className="terms" href="#">
                  Upstart Privacy Policy
                </a>, the <a className="terms" href="#">
                  Upstart Privacy Notice
                </a>, and the <a className="terms" href="#">
                  Upstart Platform Agreement
                </a>.
              </li>
            </ul>
            <button className="big-btn" type="submit">
              Sign Up
            </button>
            <h5>
              <LockAlertIcon size={34} color="#000" /> Checking your rate won't affect your credit score!
            </h5>
          </div>
          <br />
          <Link to="/" className="red btn-flat right white-text">
            Cancel
          </Link>
        </form>
        {/* <hr />
         <Link to="/login" className="orange btn-flat white-text">
          Log In
        </Link> */}
      </div>;
  }
}

const validate = values => {
  const errors = {};

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default withRouter(
  connect(null, actions)(
    reduxForm({
      validate,
      form: "registerForm"
    })(Signup)
  )
);