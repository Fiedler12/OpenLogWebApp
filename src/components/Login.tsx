
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
  const [showloginButton, setShowloginButton]  = useState(true);
  const [showlogoutButton, setShowlogoutButton]  = useState(false);
  const [users, setUsers] = useState<_user[]>(props.importUsers);
  console.log('import', props.importUsers)
  const [user, setUser] = useState<_user>()
  const [id, setId] = useState(Number)
  
  //const [user, setUser] = useState<_user>();


  async function getUsers() {
    setUsers(props.importUsers)
    console.log('login get',users)
  }

  useEffect(() => {
    getUsers();
  }, [props.importUsers]) 

  function getId () {
    setId(users.length +1)
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
    console.log('[Login Success] currentUser:', res.profileObj);
    console.log("user content created!", res.profileObj.email)
    const emailAdd = res.profileObj.email;
    const username = res.profileObj.name;
    setShowloginButton(false);
    setShowlogoutButton(true);
    let isUser= false;
    if(users.length === 0){
      setTimeout(() => {  console.log("World!"); },1000);
      getUsers();
    }
    console.log('local: ', users)
    // users.forEach(u => {
    //   console.log(u)
    //   console.log('emails: ', u.email)
    //     if(emailAdd === u.email && !isUser){
    //       console.log(u.email, u.id  + " is an user")
    //       isUser = true;
    //       setUser(u)
    //       setId(Number(u.id)) 
    //     }
    // }) 
    // if(user === undefined) {
    //     console.log(`${emailAdd} is not user`)
    //     createUser(emailAdd,username )
    // }
    // console.log('user is: ', user)
    // console.log('id being passed: ', id)
    // props.onLogin(id)
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

