import {Link} from "react-router-dom";
import React from "react";

const ButtonNewFilm = () => {
    return (
        <Link to='/newFilm'>
            <div className='addFilm floating-button'>
                +
            </div>
        </Link>
    )
};
export default ButtonNewFilm
