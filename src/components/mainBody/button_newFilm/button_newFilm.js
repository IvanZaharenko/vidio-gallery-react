import {Link} from "react-router-dom";
import React from "react";

const Button_newFilm = () => {
    return (
        <Link to='/newFilm'>
            <div className='addFilm floating-button'>
                +
            </div>
        </Link>
    )
};
export default Button_newFilm
