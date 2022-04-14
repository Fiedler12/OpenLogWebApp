import { AppBar, Avatar, IconButton, Toolbar, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../css_files/navbar.css'




const NavBar = () => {
    return (
        <AppBar position="static" className="bigblue" sx={{height:'100px'}} >
            <Toolbar>
                <Box sx={{ flexGrow: 1}}>  
                <IconButton  edge="start" >
                <Link to="/">
                <img src="../Logo.png " className="logo"> 
                </img></Link>
                </IconButton>
                <Button color="inherit">Login</Button>
                </Box>


                <Box>
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
                <IconButton>
                <Link to="/">
                <img src="../account.png " className="accountlogo"> 
                </img></Link>
                </IconButton>
                </Box>  
            </Toolbar>
        </AppBar>
        
    )
}



export default NavBar;