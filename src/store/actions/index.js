import {
    FILM_LOADED,
    ABOUT_FILM_LOADED,
    FORM,
    CHANGE_SORT
} from "../constans";

export const loadFilmPage = (value) => ({
    type: FILM_LOADED,
    payload: value
});

export const loadDescriptionFilm = (value) => ({
    type: ABOUT_FILM_LOADED,
    payload: value
});

export const form = (value) => ({
    type: FORM,
    payload: value
});

export const changeSort = value => ({
    type: CHANGE_SORT,
    payload: value
});
