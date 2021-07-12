import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './Item.css'
import plug from './../../../../../assest/image/plug.png'
import {addIdDeleteFilm, deleteFilm, loadClickDescriptionFilm} from "../../../../../store/actions";


const Item = (props) => {
    const dispatch = useDispatch();
    const {adminMode,dataFilmPage} = useSelector((state) => state.videos);
    const [isHover, setHover] = useState(false);
    const [isHoverDelete, setHoverDelete] = useState(false);

    const { poster_path, title, vote_average, release_date, id } = props.store;
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const handleClick = (id, e) => {
        if (e.target.nodeName === 'A') {
            return dispatch(loadClickDescriptionFilm(id))
        }
    };

    const handleClickDelete = (id) => {
        const idx = dataFilmPage.findIndex(el => el.id === id);
        let newArr = [
            ...dataFilmPage.slice(0,idx),
            ...dataFilmPage.slice(idx + 1)
        ];

        dispatch(deleteFilm(newArr));
        dispatch(addIdDeleteFilm(id))
    };

    return (
        <Link to={isHoverDelete ? '/': `/description/${id}`}
              className='itemMovie'
              id={id}
              onMouseOver={() => setHover(!isHover)}
              onMouseOut={() => setHover(!isHover)}
              onClick={(e) =>  handleClick(id,e)}
        >
            <div>
                <img src={`${poster_path ? poster : plug}`} alt="Постер фильма"/>
                <p className='titleItem'>{title}</p>
                <p className={`${isHover ? 'voteItem visable' : 'voteItem '}`}>{vote_average ? vote_average : 0}</p>
                <p className={`${isHover ? 'releaseItem visable' : 'releaseItem '}`}>{release_date ? release_date.split('-').reverse().join('/') : null}</p>
                {adminMode ? <span
                    className={`${isHover ? 'deleteFilm visable' : 'deleteFilm'}`}
                    onClick={(e) => handleClickDelete(id)}
                    onMouseOver={() => setHoverDelete(!isHoverDelete)}
                    onMouseOut={() => setHoverDelete(!isHoverDelete)}
                >☒</span> : null}
            </div>
        </Link>
    )
};

export default Item
