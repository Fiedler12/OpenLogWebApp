import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import '../css_files/navbar.css'




const NavBar = () => {
    return (
    
        <AppBar position="static" className="bigblue" sx={{height:'100px'}} color="primary">
            <Toolbar>
                <IconButton>
                <Link to="/">
                <img src="../Logo.png " className="logo"> 
                </img></Link>
                </IconButton>

                <button className="menu">
                    <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
                </button>

                <button className="menu">
                    <Link to="/about-us" style={{textDecoration: 'none'}}>AboutUs</Link>
                </button>

                <button className="menu">
                    <Link to="/log-cycle" style={{textDecoration: 'none'}}>LogCycle</Link>
                </button>

                <button className="menu">
                    <Link to="/Settings" style={{textDecoration: 'none'}}>Settings</Link>
                </button>

                <button className="menu">
                    <Link to="/Login" style={{textDecoration: 'none'}}>Login</Link>
                </button>
                <IconButton >
                <Link to="/">
                <img src="../account.png " className="accountlogo"> 
                </img></Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}



export default NavBar;