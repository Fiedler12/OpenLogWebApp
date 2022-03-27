import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId = '144917246358-2cq17d3sf233b3rj9p5dluack482s1tb.apps.googleusercontent.com'

function Login(){ 
  const onSuccess = (res: any ) => {
      console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log('[Login failed] res:', res);
  };

  return (
      <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px' }}
            isSignedIn={true}
          />
      </div>
  )
}

export default Login;