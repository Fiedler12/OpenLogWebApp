import { useRadioGroup } from '@mui/material';
import React, { useState } from 'react'
import Login from '../components/Login'

function LoginPage() {
  const [userId, setUserId] = useState(1);
  return (
    <div className="LoginPage">
      <Login insertId={setUserId}/>
    </div>
  );
}

export default LoginPage