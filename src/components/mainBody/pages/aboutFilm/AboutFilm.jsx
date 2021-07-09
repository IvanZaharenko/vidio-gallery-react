import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import './aboutFilm.css'
import plug from './../../../../assest/image/plug.png'
import {useDispatch, useSelector} from "react-redux";
import {loadClickDescriptionFilm} from "../../../../store/actions";
import Spinner from "../../../spinner/Spinner";


const AboutFilm = (props) => {

    const {aboutFilm, loaded} = useSelector((state) => state.videos);

    return loaded ? <Spinner/>  : <CreatePage aboutFilm={aboutFilm}/>
};

const CreatePage = (props) => {
    const{poster_path, genres, id, overview, release_date, title, tagline, vote_average, vote_count} = props.aboutFilm;
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const actualGenres = genres.map((genre) => genre.name);

    return (
        <article id={id} className='containerAboutFilm'>
            <div className='about-film_poster'>
                <img src= {`${poster_path ? poster : plug}`} alt='Постер фильма'/>
            </div>
            <div className='about-film_info'>
                <h2 className='about_title'> {title}</h2>
                <p className='about_miniOverview'> {tagline}</p>
                <p className='about_release'> Год выпуска: <span className='white_color'>{release_date ? release_date.split('-').reverse().join('/') : null}</span></p>
                <p className='about_genres'> Жанры:  <span className='white_color'>{actualGenres.length !== 0 ? actualGenres.join(', ') + '.' : ''}</span></p>
                <p className='about_vote'> Рейтинг:  <span className='white_color'>{vote_average}</span></p>
                <p className='about-vote_count'> Понравилось:  <span className='white_color'>{vote_count}</span> людям.</p>
                <p className='about_overview'>Описание фильма: <span className='white_color'>{overview}</span></p>
            </div>
        </article>
    )
};
export default AboutFilm




