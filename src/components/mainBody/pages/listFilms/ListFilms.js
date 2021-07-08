import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './ListFilms.css'
import Item from "./item/Item";
import {Pagination} from "../../pagination/pagination";


const ListFilms = () => {
    const {dataFilmPage, loaded} = useSelector((state) => state.videos);

    const listFilms =  dataFilmPage.map(itemFilm => (

            <Item
                store={itemFilm}
                key={itemFilm.id}
            />
    ));

    return (<>
            <div className='containerListMovie'>
                {loaded ? null : listFilms}
            </div>
            <Pagination/>
        </>
    )
};

export default ListFilms

