import React from "react";

import BaseButton from "components/BaseButton";
import FormGroup from "components/FormGroup";

const Login = () => {
  return (
    <div className="login">
      <div className="login_logo">
        <h2>DOANFLIX</h2>
      </div>
      <div className="login_body">
        <div className="form-signin">
          <h3>Sign In</h3>
          <FormGroup id="email" label="Email" type="text" />
          <FormGroup id="password" label="Password" type="password" />

          <BaseButton>Sign In</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
