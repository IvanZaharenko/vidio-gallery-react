import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import './MainBody.css'

import {Sort} from "./sort/Sort";
import ListFilms from "./pages/listFilms/ListFilms";
import Spinner from "../spinner/Spinner";

const NewFilm = () => {
    return (
        <Link to='/newFilm'>
            <div className='addFilm floating-button'>
                +
            </div>
        </Link>

    )
};

const MainBody = () => {
    const {loaded, adminMode} = useSelector((state) => state.videos);


    return (<>
            <Sort/>
           {adminMode ? <NewFilm/> : null}
            {loaded ? <Spinner/> : <ListFilms/>}
        </>
    )
};
export default MainBody
