import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './ListFilms.css'
import Item from "./item/Item";
import {Pagination} from "../../pagination/pagination";


const ListFilms = () => {
    const {dataFilmPage, loaded, dataDelFilm} = useSelector((state) => state.videos);

    const actualBasa = dataFilmPage.filter(item => dataDelFilm.map(id => item.id !== id));

   /* const actualBasa = [];

    const x = dataFilmPage.map(item => {
        for (let i = 0; i <= dataDelFilm.length; i++) {
            if (dataDelFilm[i] === item.id) continue;
            return actualBasa.push(item)
        }
    });*/

  /*      const idx = dataFilmPage.findIndex(el => el.id === id);
    let newArr = [
        ...dataFilmPage.slice(0,idx),
        ...dataFilmPage.slice(idx + 1)
    ];*/

    return (<>
            <div className='containerListMovie'>
                {loaded ?
                    null :
                    actualBasa.map(itemFilm => (
                        <Item
                            store={itemFilm}
                            key={itemFilm.id}
                        />
                    ))}
            </div>
            <Pagination/>
        </>
    )
};

export default ListFilms

