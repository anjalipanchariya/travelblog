import React from "react";

import { Nav, NavBtn, NavBtnLink, NavMenu, Bars, NavLink} from "./NavbarElements";

const Navbar = () =>{

    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;