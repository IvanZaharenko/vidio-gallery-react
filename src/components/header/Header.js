import './Header.css'
import React from 'react'
import logo from './../../assest/image/logo.png'


const Header = () => {
    return (
        <header>
            <a className="logo-position logo" href="#">
                <img alt="Переход на главную страницу"
                     title="Переход на главную страницу"
                     src={logo}
                />
            </a>
            <a href="#" className="double-border-button">Sign In / Sign Up</a>
        </header>
    )
};

export default Header
