import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import './ListFilms.css'
import Item from "./item/Item";


const ListFilms = () => {

    return (
        <div className='containerListMovie'>
            <Item/>
        </div>
    )
};

export default ListFilms
