import {FILM_LOADED, ABOUT_FILM_LOADED} from "../constans";

export const loadFilmPage = (value) => ({
    type: FILM_LOADED,
    payload: value
});

export const loadDescriptionFilm = (value) => ({
    type: ABOUT_FILM_LOADED,
    payload: value
});
