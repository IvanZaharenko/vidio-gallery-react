import React from 'react'

import './MainBody.css'

import {Sort} from "./sort/Sort";
import ListFilms from "./pages/listFilms/ListFilms";




const MainBody = () => {

    return (<>
            <Sort/>
            <ListFilms/>
        </>
    )
};
export default MainBody
