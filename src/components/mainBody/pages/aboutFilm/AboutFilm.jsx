import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {
    addIdDeleteFilm,
    loadClickDescriptionFilm,
    loadedDescriptionFilm,
    loadFilmPage
} from "../../../../store/actions";
import plug from './../../../../assest/image/plug.png'
import Spinner from "../../../spinner/Spinner";
import './aboutFilm.css'


const AboutFilm = (props) => {
    const {aboutFilm, loaded, dataNewFilm} = useSelector((state) => state.videos);
    const {idFilm} = props;
    const dispatch = useDispatch();

    const [load, setLoad] = useState(true);
    const [loadApi, setLoadApi] = useState(true);

    useEffect(() => {
        dispatch(loadClickDescriptionFilm(idFilm));

        /*  if (idFilm.length === 20) {
              const idx = dataNewFilm.findIndex(el => el.id === idFilm);
              let currentFilm = [
                  ...dataNewFilm.slice(idx , idx+1)
              ];
              dispatch(loadedDescriptionFilm(currentFilm[0]));
          } else {
              dispatch(loadClickDescriptionFilm(idFilm));
          }*/
    }, [idFilm]);

    setTimeout(() => {
        setLoad(false)
    }, 700);

    return load ? <Spinner/> : <CreatePage aboutFilm={ aboutFilm}/>
};

const CreatePage = (props) => {
    const {adminMode, dataFilmPage, activUser} = useSelector((state) => state.videos);
    const dispatch = useDispatch();

    const {poster_path, genres, id, overview, release_date, title, tagline, vote_average, vote_count} = props.aboutFilm;
    const [count, setCount] = useState(vote_count);

    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const actualGenres = genres.map((genre) => genre.name);

    const handleClickDel = (id) => {
        const idx = dataFilmPage.findIndex(el => el.id === id);
        let newArr = [
            ...dataFilmPage.slice(0, idx),
            ...dataFilmPage.slice(idx + 1)
        ];
        dispatch(loadFilmPage(newArr));
        dispatch(addIdDeleteFilm(id))
    };

    return (
        <article id={id} className='containerAboutFilm'>
            <div className='about-film_poster'>
                <img src={`${poster_path ? poster : plug}`} alt='Постер фильма'/>
                {adminMode ?
                    <Link className='deleteFilm_about' to={'/'} onClick={e => handleClickDel(id)}
                    >☒</Link> : null}
            </div>
            <div className='about-film_info'>
                <h2 className='about_title'> {title}</h2>
                <p className='about_miniOverview'> {tagline}</p>
                <p className='about_release'> Год выпуска: <span
                    className='white_color'>{release_date ? release_date.split('-').reverse().join('/') : null}</span>
                </p>
                <p className='about_genres'> Жанры: <span
                    className='white_color'>{actualGenres.length !== 0 ? actualGenres.join(', ') + '.' : ''}</span></p>
                <p className='about_vote'> Рейтинг: <span className='white_color'>{vote_average}</span></p>
                <p className='about-vote_count'> Понравилось: <span className='white_color'>{count}</span> людям.
                    {activUser !== null && adminMode !== true ?
                        <p>
                            <input name='toggle-heart' id="toggle-heart" type="checkbox"/>
                            <label
                                htmlFor="toggle-heart"
                                aria-label="like"
                                className="like"
                                onClick={() => setCount(vote_count + 1)
                                }
                            >❤</label>
                        </p> : null
                    }
                </p>
                <p className='about_overview'>Описание фильма: <span className='white_color'>{overview}</span></p>
            </div>
        </article>
    )
};
export default AboutFilm




