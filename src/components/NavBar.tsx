import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
//import styles from "./";
import './Colorstyle.css';

const NavBar = () => {
    return (
    
        <AppBar position="static" className="bigblue" >
        
            <Toolbar>
                <IconButton>
                <Link to="/">
                <img src="../Logo.png"> 
                </img></Link>
                </IconButton>

                <IconButton>
                    <Link to="/">Home</Link>
                </IconButton>

                <IconButton>
                    <Link to="/about-us">AboutUs</Link>
                </IconButton>

                <IconButton>
                    <Link to="/log-cycle">LogCycle</Link>
                </IconButton>

                <IconButton>
                    <Link to="/Settings">Settings</Link>
                </IconButton>

                <IconButton>
                    <Link to="/Login">Login</Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}



export default NavBar;