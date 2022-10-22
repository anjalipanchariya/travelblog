import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Nav,NavMenu, Bars, NavLink, User, UserLink} from "./NavbarElements";

const Navbar = () =>{

    return(
        <>
            <nav>
                <Link className="navbar-logo">
                    Logo
                </Link>
            </nav>
        </>
    )
}

export default Navbar;