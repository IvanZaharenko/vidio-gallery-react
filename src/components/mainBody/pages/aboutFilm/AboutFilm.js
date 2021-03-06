import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {
    addIdDeleteFilm, apiErr, loadedDescriptionFilm, loadFilmPage
} from "../../../../store/actions";
import Spinner from "../../../spinner/spinner";
import './aboutFilm.css'
import GalleryService from "../../../../servises/videoApi-servis";
import CreatePage from "./createPage/createPage";


const AboutFilm = (props) => {
    const {aboutFilm} = useSelector((state) => state.videos);
    const {idFilm} = props;
    const dispatch = useDispatch();

    const [load, setLoad] = useState(true);

    useEffect(() => {
        GalleryService.getMovie(idFilm)
            .then((data) => dispatch(loadedDescriptionFilm(data)))
            .then(() => setLoad(false))
            .catch(() => {
                dispatch(apiErr(true));
            });
    }, [idFilm]);

    return load ? <Spinner/> : <CreatePage aboutFilm={aboutFilm}/>
};
/*
const CreatePage = ({aboutFilm:{poster_path, genres, id, overview, release_date, title, tagline, vote_average, vote_count}}) => {
    const {adminMode, dataFilmPage, activUser} = useSelector((state) => state.videos);
    const dispatch = useDispatch();
    const [count, setCount] = useState(vote_count);

    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const actualGenres = genres.map((genre) => genre.name);
    const displayGenres = ` ${actualGenres.length !== 0 ? actualGenres.join(', ') + '.' : null}`;
    const dataRelease = ` ${release_date ? release_date.split('-').reverse().join('/') : null}`;

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
                <img src={`${poster_path ? poster : plug}`} alt='???????????? ????????????'/>
                {adminMode ?
                    <Link className='deleteFilm_about' to={'/'} onClick={e => handleClickDel(id)}
                    >???</Link> : null}
            </div>
            <div className='about-film_info'>
                <h2 className='about_title'> {title}</h2>
                <p className='about_miniOverview'> {tagline}</p>
                <p className='about_release'> ?????? ??????????????:
                    <span className='white_color'>{dataRelease}</span>
                </p>
                <p className='about_genres'> ??????????:
                    <span className='white_color'>{displayGenres}</span>
                </p>
                <p className='about_vote'> ??????????????:
                    <span className='white_color'>{vote_average}</span>
                </p>
                <p className='about-vote_count'> ??????????????????????:
                    <span className='white_color'>{count}</span> ??????????.
                    {activUser !== null && adminMode !== true ?
                        <p>
                            <input name='toggle-heart' id="toggle-heart" type="checkbox"/>
                            <label
                                htmlFor="toggle-heart"
                                aria-label="like"
                                className="like"
                                onClick={() => setCount(vote_count + 1)
                                }
                            >???</label>
                        </p> : null
                    }
                </p>
                <p className='about_overview'>???????????????? ????????????: <span className='white_color'>{overview}</span></p>
            </div>
        </article>
    )
};*/
export default AboutFilm




