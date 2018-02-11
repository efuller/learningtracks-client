import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
      data: {
          email: '',
          password: ''
      }
  };
  onChange = (e) => {
    this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });
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
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
