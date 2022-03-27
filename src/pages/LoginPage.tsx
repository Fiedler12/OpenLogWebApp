import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'

function LoginPage() {
  return (
    <div className="LoginPage">
      <Login />
      <Logout />
    </div>
  );
}

export default LoginPage;