import React from 'react'
import {Link} from "react-router-dom";

import logo from './../../assest/image/logo.png'
import './Header.css'



const Header = () => {
    return (
        <header>
            <Link className="logo-position logo" to="/">
                <img alt="Переход на главную страницу"
                     title="Переход на главную страницу"
                     src={logo}
                />
            </Link>
            <Link
                to="login"
                className="double-border-button">
                Sign In / Sign Up
            </Link>
        </header>
    )
};

export default Header
