// src/components/SignupForm.js
import React from 'react';
import FormField from './FormField';
import './SignupForm.css';

function SignupForm() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Navigational Bar 2
          </a>
        </div>
      </nav>

      <form className="signup-form">
        <div className="signup-form-title">Sign Up Form:</div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <div className="control">
          <button className="button is-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;