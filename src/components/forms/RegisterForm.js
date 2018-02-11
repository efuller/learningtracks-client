import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    errors: {},
  };
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.data);
  };
  render() {
    return (
      <form>
        <div className="field">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <div className="control">
            <input
              id="firstName"
              className="input"
              type="text"
              name="firstName"
              value={this.state.data.firstName}
              onChange={this.onChange}
              placeholder="First Name"
            />
          </div>
          {this.state.errors.firstName ? (
            <p className="help is-danger">{this.state.errors.firstName}</p>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <div className="control">
            <input
              id="lastName"
              className="input"
              type="text"
              name="lastName"
              value={this.state.data.lastName}
              onChange={this.onChange}
              placeholder="Last Name"
            />
          </div>
          {this.state.errors.lastName ? (
            <p className="help is-danger">{this.state.errors.lastName}</p>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="control">
            <input
              id="email"
              className="input"
              type="email"
              name="email"
              value={this.state.data.email}
              onChange={this.onChange}
              placeholder="email"
            />
          </div>
          {this.state.errors.email ? (
            <p className="help is-danger">{this.state.errors.email}</p>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="control">
            <input
              id="password"
              className="input"
              type="password"
              name="password"
              value={this.state.data.password}
              onChange={this.onChange}
              placeholder="Password"
            />
          </div>
          {this.state.errors.password ? (
            <p className="help is-danger">{this.state.errors.password}</p>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <div className="control">
            <input
              id="confirmPassword"
              className="input"
              type="confirmPassword"
              name="confirmPassword"
              value={this.state.data.confirmPassword}
              onChange={this.onChange}
              placeholder="Confirm Password"
            />
          </div>
          {this.state.errors.confirmPassword ? (
            <p className="help is-danger">
              {this.state.errors.confirmPassword}
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link" onClick={this.onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default RegisterForm;
