import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
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
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="control">
            <input
              id="email"
              className="input"
              type="email"
              value={this.state.data.email}
              onChange={this.onChange}
              name="email"
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

export default LoginForm;
