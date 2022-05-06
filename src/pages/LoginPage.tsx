import Login, {_users, _user} from '../components/Login'

function LoginPage(users: _user[] ) {
  return (
    <div className="LoginPage">
      <Login {...users}/>
    </div>
  );
}

export default LoginPage