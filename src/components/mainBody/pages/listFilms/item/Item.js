import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './Item.css'
import plug from './../../../../../assest/image/plug.png'
import {addIdDeleteFilm, changeNewFilm, loadFilmPage} from "../../../../../store/actions";


const Item = (props) => {
    const dispatch = useDispatch();
    const {adminMode, dataFilmPage, dataNewFilm} = useSelector((state) => state.videos);
    
    const [isHover, setHover] = useState(false);
    const [isHoverDelete, setHoverDelete] = useState(false);
    const {poster_path, title, vote_average, release_date, id} = props.store;

    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const posterBody = `${poster_path ? poster : plug}`;

    const classVoteItem = `${isHover ? 'voteItem visable' : 'voteItem '}`;
    const voteItemBody = vote_average ? vote_average : 0 ;

    const classReleaseItem = `${isHover ? 'releaseItem visable' : 'releaseItem '}`;
    const releaseItemBody = release_date ? release_date.split('-').reverse().join('/') : null;

    const classDeleteFilm = `${isHover ? 'deleteFilm visable' : 'deleteFilm'}`;

    const handleClickDelete = (id) => {
        if (typeof id === "number") {
            const idx = dataFilmPage.findIndex(el => el.id === id);
            let newArr = [
                ...dataFilmPage.slice(0, idx),
                ...dataFilmPage.slice(idx + 1)
            ];
            dispatch(loadFilmPage(newArr));
            dispatch(addIdDeleteFilm(id))
        } else {
            const idx = dataNewFilm.findIndex(el => el.id === id);
            let newArr = [
                ...dataNewFilm.slice(0, idx),
                ...dataNewFilm.slice(idx + 1)
            ];
            dispatch(changeNewFilm(newArr));
            dispatch(addIdDeleteFilm(id))
        }
    };

    return (
        <Link to={isHoverDelete ? '/' : `/description/${id}`}
              className='itemMovie'
              id={id}
              onMouseOver={() => setHover(!isHover)}
              onMouseOut={() => setHover(!isHover)}
        >
            <div>
                <img src={posterBody} alt="Постер фильма"/>
                <p className='titleItem'>{title}</p>
                <p className={classVoteItem}>{voteItemBody}</p>
                <p className={classReleaseItem}>{releaseItemBody}</p>
                {adminMode ? <span
                    className={classDeleteFilm}
                    onClick={(e) => handleClickDelete(id)}
                    onMouseOver={() => setHoverDelete(!isHoverDelete)}
                    onMouseOut={() => setHoverDelete(!isHoverDelete)}
                >☒</span> : null}
            </div>
        </Link>
    )
};

export default Item
