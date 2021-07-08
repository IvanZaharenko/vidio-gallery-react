import React from 'react'

import './MainBody.css'

import {Sort} from "./sort/Sort";
import ListFilms from "./pages/listFilms/ListFilms";
import {useSelector} from "react-redux";
import Spinner from "../spinner/Spinner";


const MainBody = () => {
    const {loaded} = useSelector((state) => state.videos);


    return (<>
            <Sort/>
            {loaded ? <Spinner/> : <ListFilms/>}
        </>
    )
};
export default MainBody
