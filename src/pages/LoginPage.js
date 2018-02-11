import React, { Component } from 'react';
import LoginForm from '../components/forms/LoginForm';

class LoginPage extends Component {
  state = {};
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="is-size-1">Login</h1>
          <LoginForm submit={this.submit} />
        </div>
      </section>
    );
  }
}

export default LoginPage;
