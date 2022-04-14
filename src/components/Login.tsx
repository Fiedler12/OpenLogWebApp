import { Google, LineAxisOutlined } from '@mui/icons-material';
import React, {useState} from 'react'
import axios, { AxiosResponse } from "axios";
import {GoogleLogin, GoogleLogout} from 'react-google-login'

interface AuthReponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const onSuccess = async (res:any) =>  {
    try {
      const result: AxiosResponse<AuthReponse> = await axios.post("/auth/", {
        token: res?.tokenId,
      });
    }
    catch (err) {
      console.log(err);
    }
  };

return (
  <div className="h-screen w-screen flex items-center justify-center flex-col">
    {!user && (
      <GoogleLogin
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        onSuccess={onSuccess}
      />
    )}

    {user && (
      <>
        <img src={user.avatar} className="rounded-full" />
        <h1 className="text-xl font-semibold text-center my-5">
          {user.name}
        </h1>
      </>
    )}
  </div> 
  );
};

export default GoogleAuth;