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
                    <Link to="/">AboutUs</Link>
                </IconButton>
                <IconButton>
                    <Link to="/">LogCycle</Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;