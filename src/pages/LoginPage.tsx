import { useNavigate } from 'react-router-dom';
import { Login, _user} from '../components/Login'

const LoginPage = (props: { onLogin: (arg0: any) => void; }) => {

  const navigate = useNavigate();

  const onLoginSuccess = (user: any) => {
    props.onLogin(user)
    navigate('/')
  }


  return (
    <div className="LoginPage">
      <Login onLogin={onLoginSuccess}/>
    </div>
  );
}

export default LoginPage