import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                
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
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;