import { useRadioGroup } from '@mui/material';
import React, { useState } from 'react'
import Login from '../components/Login'

<<<<<<< HEAD
const [userId, setUserId] = useState(1);
=======
>>>>>>> d497b8f28f2bf25d17caf92b7da618dc7acbcef8

function LoginPage() {
  return (

    <div className="LoginPage">
      <Login insertId={setUserId}/>
    </div>
  );
}

export default LoginPage;

export { userId }; 