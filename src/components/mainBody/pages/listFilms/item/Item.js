import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import './Item.css'
import plug from './../../../../../assest/image/plug.png'
import {loadClickDescriptionFilm} from "../../../../../store/actions";


const Item = (props) => {
    const dispatch = useDispatch();


    const { poster_path, title, vote_average, release_date, id } = props.store;
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const [isHover, setHover] = useState(false);

    const handleClick = ({target}) =>{
        dispatch(loadClickDescriptionFilm(target.id))
    };
       return (
        <Link to={`/description`}
              className='itemMovie'
              id={id}
              onMouseOver={() => setHover(!isHover)}
              onMouseOut={() => setHover(!isHover)}
              onClick={handleClick}
        >
            <div>
                <img src={`${poster_path ? poster : plug}`} alt="Постер фильма"/>
                <p className='titleItem'>{title}</p>
                <p className={`${isHover ? 'voteItem visable' : 'voteItem '}`}>{vote_average}</p>
                <p className={`${isHover ? 'releaseItem visable' : 'releaseItem '}`}>{release_date.split('-').reverse().join('/')}</p>
            </div>
        </Link>
       )
};

export default Item
