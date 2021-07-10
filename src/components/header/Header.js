import React from 'react'
import {Link} from "react-router-dom";

import logo from './../../assest/image/logo.png'
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {adminComeIn, userComeIn} from "../../store/actions";


const Header = () => {
    const {activUser} = useSelector((state) => state.videos);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (activUser) dispatch(userComeIn(null));
        if (activUser === 'Admin') dispatch(adminComeIn(false))

    };

    return (
        <header>
            <Link className="logo-position logo" to="/">
                <img alt="Переход на главную страницу"
                     title="Переход на главную страницу"
                     src={logo}
                />
            </Link>
            <p className={activUser ? 'user_head visable' : 'user_head'}>{activUser}</p>
            <Link
                to={activUser? "/" : "/login"}
                className="double-border-button"
                onClick={handleClick}
            >
                {activUser? 'Log Out' : 'Sign In / Sign Up'}
            </Link>
        </header>
    )
};

export default Header
