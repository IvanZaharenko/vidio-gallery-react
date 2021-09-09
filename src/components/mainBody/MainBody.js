import React from 'react'
import {useSelector} from "react-redux";

import './MainBody.css'

import {Sort} from "./sort/sort";
import ListFilms from "./pages/listFilms/ListFilms";
import Spinner from "../spinner/spinner";
import ButtonNewFilm from "./button_newFilm/button_newFilm";

const MainBody = () => {
    const {loaded, adminMode} = useSelector((state) => state.videos);

    return (<>
            <Sort/>
            {adminMode ? <ButtonNewFilm/> : null}
            {loaded ? <Spinner/> : <ListFilms/>}
        </>
    )
};
export default MainBody
