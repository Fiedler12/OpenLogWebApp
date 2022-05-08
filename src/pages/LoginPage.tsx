import { useNavigate } from 'react-router-dom';
import { Login, _user} from '../components/Login'
import {useEffect, useState, useRef} from 'react'
import DatabaseService from '../components/DatabaseService';


const LoginPage = (props: { onLogin: (arg0: any) => void; }) => {

  const users = useRef([]);
  // const navigate = useNavigate();

  const onLoginSuccess = (user: Number) => {
    props.onLogin(user)
  }

  async function getUsers() {
    users.current = await DatabaseService.getUsers();
    console.log('loginPage ' , users)
  }

  useEffect( () => {
    
    getUsers();
    
    console.log("loginpage", users)
  }, [])


  return (
    <div className="LoginPage">
      <Login onLogin={onLoginSuccess} importUsers={users.current}/>
    </div>
  );
}

export default LoginPage