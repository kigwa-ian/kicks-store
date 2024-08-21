import React from "react";

function Login({ onLogin }) {
  return (
    <div className="login">
      <h2>Login</h2>
      <button onClick={onLogin}>Log In</button>
    </div>
  );
}

export default Login;
