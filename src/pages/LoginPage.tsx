import { useNavigate } from 'react-router-dom';
import {useEffect, useState, useRef} from 'react'
import DatabaseService from '../components/DatabaseService';
import { Login, _user} from '../components/Login'

interface user {
  id: Number,
  email: string,
  name: string
}

const LoginPage = (props: { onLogin: (arg0: Number) => void; }) => {
  const navigate = useNavigate();
  const users = useRef([]);
  // const navigate = useNavigate();

  const onLoginSuccess = (user: Number) => {
    props.onLogin(user)
  }

  async function getUsers() {
    const allUsers = await DatabaseService.getUsers();
    setUsers(allUsers);
  }

  useEffect( () => {
    getUsers();
  }, [])

  return (
    <div className="LoginPage">
      <Login onLogin={onLoginSuccess} importUsers={users.current}/>
    </div>
  );
}

export default LoginPage