import React from 'react'
import {GoogleLogout} from 'react-google-login';

const clientId = '144917246358-2cq17d3sf233b3rj9p5dluack482s1tb.apps.googleusercontent.com';

function Logout(){
    const onSuccess = () => {
        alert('Logout made successfull') ;
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;