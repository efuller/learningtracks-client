import React, { Component } from 'react';

class RegisterForm extends Component {
  state = {
      data: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
      }
  };
  onChange = (e) => {
    this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value }
    })
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
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
