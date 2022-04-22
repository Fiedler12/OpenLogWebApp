import { useRadioGroup } from '@mui/material';
import React, { useState } from 'react'
import Login from '../components/Login'

const [userId, setUserId] = useState(1);

function LoginPage() {
  return (
    <div className="LoginPage">
      <Login insertId={setUserId}/>
    </div>
  );
}

export default LoginPage;

export { userId }; 