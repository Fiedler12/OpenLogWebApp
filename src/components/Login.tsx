import {useState, useEffect, useRef} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import DatabaseService from './DatabaseService';

const clientId = '144917246358-2cq17d3sf233b3rj9p5dluack482s1tb.apps.googleusercontent.com'


export type _user = {
  id: Number,
  name: String,
  email: String;
}


export const Login = (props: {importUsers:_user[] ; onLogin: (arg0: Number) => void; }) => { 
  const [showloginButton, setShowloginButton]  = useState(true);
  const [showlogoutButton, setShowlogoutButton]  = useState(false);
  const users = useRef(props.importUsers);
  console.log('import', props.importUsers)
  const [user, setUser] = useState<_user>()
  const [id, setId] = useState(Number)
  
  //const [user, setUser] = useState<_user>();


 useEffect(()  => {
    users.current = (props.importUsers)
    console.log('login get',users)
  });


  function getId () {
    setId(users.current.length +1)
  }

  
  const onLoginFailure = (res: any) => {
    console.log('[Login failed] res:', res);

  };
  
  const onLogoutSuccess = () => {
    alert('Logout made successfull: userid:') ;
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);    
  }
  
  async function getUser(id: Number) {
    return await DatabaseService.getUser(id);
  }
  
  
  
  const onLoginSuccess = async (res: any ) => {
    // while(users.current.length === 0){
    //   console.log("waiting")
    // }
    console.log('[Login Success] currentUser:', res.profileObj);
    console.log("user content created!", res.profileObj.email)
    const emailAdd = res.profileObj.email;
    const username = res.profileObj.name;
    setShowloginButton(false);
    setShowlogoutButton(true);
    let isUser= false;
    console.log('local: ', users)
    const user = users.current.find( u => 
        u.email=== emailAdd)
    if(user=== undefined) {
        console.log(`${emailAdd} is not user`)
        createUser(emailAdd,username )
    }
    else{
      setId(Number(user.id))
    }
    console.log('user is: ', user)
    console.log('id being passed: ', user!!.id)
    
    props.onLogin(id)
};

async function createUser (emailAddress: String, username: String)   {
  getId(); 
  const response = await DatabaseService.addUser({
    id,
    name: username,
    email : emailAddress,
  })
  console.log(response)
  setUser(response); 
};


 
return (
    <div>
      { showloginButton ?
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in"
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