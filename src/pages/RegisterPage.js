import React, { Component } from 'react';
import RegisterForm from '../components/forms/RegisterForm';

class RegistrationPage extends Component {
  state = {};
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="is-size-1">Register</h1>
          <RegisterForm submit={this.submit} />
        </div>
      </section>
    );
  }
}

export default RegistrationPage;
