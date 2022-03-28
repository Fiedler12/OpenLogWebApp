import React, {useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'

const clientId = '144917246358-2cq17d3sf233b3rj9p5dluack482s1tb.apps.googleusercontent.com'

function Login(){ 

  const [showloginButton, setShowloginButton]  = useState(true);
  const [showlogoutButton, setShowlogoutButton]  = useState(false);
  
  const onLoginSuccess = (res: any ) => {
      console.log('[Login Success] currentUser:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
  };

  const onLoginFailure = (res: any) => {
    console.log('[Login failed] res:', res);
  };

  const onLogoutSuccess = () => {
    alert('Logout made successfull') ;
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
};

return (
    <div>
        { showloginButton ?
          <GoogleLogin
            clientId={clientId}
            buttonText="Sing in"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          /> : null }
        
        { showlogoutButton ?
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
        /> : null }
      </div>
  );
}

export default Login;