import Login, { _user} from '../components/Login'

function LoginPage(users: _user[] ) {
  return (
    <div className="LoginPage">
      <Login />
    </div>
  );
}

export default LoginPage