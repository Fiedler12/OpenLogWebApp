import { AppBar, IconButton, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../css_files/navbar.css';

const NavBar = () => {
    return (
        <AppBar position="static" className="bigblue" sx={{height:'100px'}} >
            <Toolbar>
                <IconButton  edge="start" >
                <Link to="/">
                <img src="../Logo.png " className="logo"> 
                </img></Link>
                </IconButton>
                
                <Button color="inherit">
                <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
                </Button>
                
               
               <Button color="inherit">
               <Link to="/about-us" style={{textDecoration: 'none'}}>AboutUs</Link>
               </Button>

                <Button color="inherit">
                <Link to="/Settings" style={{textDecoration: 'none'}}>Settings</Link>
                </Button>
                

                <Button color="inherit">
                <Link to="/Login" style={{textDecoration: 'none'}}>Login</Link>
                </Button>
               
                <IconButton >
                <Link to="/Settings">
                <img src="../account.png " className="accountlogo"> 
                </img></Link>
                </IconButton>
                 
            </Toolbar>
        </AppBar>
        
    )
}



export default NavBar;