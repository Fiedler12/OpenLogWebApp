import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <Link to="/">Home</Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;