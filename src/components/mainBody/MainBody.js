import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import './MainBody.css'

import {Sort} from "./sort/sort";
import ListFilms from "./pages/listFilms/ListFilms";
import Button_newFilm from "./button_newFilm/button_newFilm"
import Spinner from "../spinner/spinner";

const MainBody = () => {
    const {loaded, adminMode} = useSelector((state) => state.videos);

    return (<>
            <Sort/>
            {adminMode ? <Button_newFilm/> : null}
            {loaded ? <Spinner/> : <ListFilms/>}
        </>
    )
};
export default MainBody
