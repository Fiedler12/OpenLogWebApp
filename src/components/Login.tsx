
import {useState, useEffect} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import DatabaseService from './DatabaseService';

const clientId = '144917246358-2cq17d3sf233b3rj9p5dluack482s1tb.apps.googleusercontent.com'


export type _user = {
  id: Number,
  name: String,
  email: String;
}


export const Login = (props: {importUsers:_user[] ; onLogin: (arg0: Number) => void; }) => { 
  const [id, setId] = useState(Number)
  const [showloginButton, setShowloginButton]  = useState(true);
  const [showlogoutButton, setShowlogoutButton]  = useState(false);
  const [users, setUsers] = useState<_user[]>([]);
  
  //const [user, setUser] = useState<_user>();


  function getUsers() {
    setUsers(props.importUsers)
  }

  useEffect(() => {
    getUsers();
    console.log(users); 
  }) 

  function getId () {
    setId(users.length +1)
  }

  
  const onLoginFailure = (res: any) => {
    console.log('[Login failed] res:', res);
  };
  
  const onLogoutSuccess = () => {
    alert('Logout made successfull: userid:') ;
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
    const emailAdd = res.profileObj.email;
    const username = res.profileObj.name;
    setShowloginButton(false);
    setShowlogoutButton(true);
    let isUser= false;
    const user = users.find( u => 
        u.email=== emailAdd)
    if(user=== undefined) {
        createUser(emailAdd,username )
    }
    else{
      setId(Number(user.id))
    }
    props.onLogin(id)
};


async function createUser (emailAddress: String, username: String)   {
  getId(); 
  const response = await DatabaseService.addUser({
    id,
    name: username,
    email : emailAddress,
  })
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

