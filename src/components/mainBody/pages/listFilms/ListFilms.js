import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './ListFilms.css'
import Item from "./item/Item";
import {Pagination} from "../../pagination/pagination";


const ListFilms = () => {
    const {dataFilmPage, loaded, dataDelFilm, dataNewFilm, currentPageState, typeSort} = useSelector((state) => state.videos);

    const createActualBasa = (dataFilm, dataDel, dataNew) => {
        if (dataNew.length > 0 && currentPageState === 1 && typeSort === 'vote_count.desc') {
            const basa = dataFilm.filter(item => !dataDel.includes(item.id));

            return [...dataNew, ...basa.slice(0, -dataNew.length)]

        } else return dataFilm.filter(item => !dataDel.includes(item.id))
    };

    return (<>
            <div className='containerListMovie'>
                {loaded ?
                    null :
                    createActualBasa(dataFilmPage, dataDelFilm, dataNewFilm).map(itemFilm => (
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

