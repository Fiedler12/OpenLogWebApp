import { useNavigate } from 'react-router-dom';
import { Login, _user} from '../components/Login'
import {useEffect, useState} from 'react'
import DatabaseService from '../components/DatabaseService';


const LoginPage = (props: { onLogin: (arg0: any) => void; }) => {

  const [users, setUsers] = useState<_user[]>([]);
  // const navigate = useNavigate();

  const onLoginSuccess = (user: Number) => {
    props.onLogin(user)
  }

  async function getUsers() {
    let allUsers = await DatabaseService.getUsers();
    console.log("loginpage get", allUsers)
    setUsers(allUsers)
  }

  useEffect( () => {
    getUsers();
    console.log("loginpage", users)
  }, [])


  return (
    <div className="LoginPage">
      <Login onLogin={onLoginSuccess} importUsers={users}/>
    </div>
  );
}

export default LoginPage