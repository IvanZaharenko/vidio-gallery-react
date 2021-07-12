import {
    FILM_LOADED,
    ABOUT_FILM_LOADED,
    CHANGE_SORT,
    CHANGE_LOAD,
    CHANGE_CURRENT_PAGE,
    API_ERROR,
    USER_COME_IN,
    ADMIN_COME_IN,
    DELETE_FILM,
    ADD_NEW_USER,
    ADD_ID_DELETE_FILM, GENRE_LOAD
} from "../constans";

import GalleryService from "./../../servises/videoApi-servis"

export const loadFilmPage = (value) => ({
    type: FILM_LOADED,
    payload: value
});

export const changeCurrentPage = (value) => ({
    type: CHANGE_CURRENT_PAGE,
    payload: value
});

export const loadedDescriptionFilm = (value) => ({
    type: ABOUT_FILM_LOADED,
    payload: value
});

export const changeSort = value => ({
    type: CHANGE_SORT,
    payload: value
});

export const changeLoad = (value) => ({
    type: CHANGE_LOAD,
    payload: value
});

export const apiError = (value) => ({
    type: API_ERROR,
    payload: value
});

export const genreLoad = (value) => ({
    type: GENRE_LOAD,
    payload: value
});

export const userComeIn = value => ({
    type: USER_COME_IN,
    payload: value
});

export const adminComeIn = value => ({
    type: ADMIN_COME_IN,
    payload: value
});

export const deleteFilm = value => ({
    type: DELETE_FILM,
    payload: value
});

export const addNewUser = value => ({
    type: ADD_NEW_USER,
    payload: value
});

export const addIdDeleteFilm = value => ({
    type: ADD_ID_DELETE_FILM,
    payload: value
});

export const loadFilms = (value) => (dispatch) => {
    const {currentPage, typeSort} = value;

    dispatch(changeLoad(true));
    GalleryService.getMovieList(currentPage, typeSort)
        .then((data) => dispatch(loadFilmPage(data)))
        .then(() => dispatch(changeLoad(false)))
};

export const loadChangeSort = (value) => (dispatch) => {
    dispatch(changeSort(value));
    dispatch(changeCurrentPage(1));
    dispatch(changeLoad(true));
    GalleryService.getMovieList(1, value)
        .then((data) => dispatch(loadFilmPage(data)))
        .then(() => dispatch(changeLoad(false)))
};

export const loadChangeCurrentPage = (value) => (dispatch) => {
    const {page, typeSort} = value;

    dispatch(changeCurrentPage(page));
    dispatch(changeLoad(true));
    GalleryService.getMovieList(page, typeSort)
        .then((data) => dispatch(loadFilmPage(data)))
        .then(() => dispatch(changeLoad(false)))
};

export const loadClickDescriptionFilm = (value) => (dispatch) => {
    dispatch(changeLoad(true));

    GalleryService.getMovie(value)
        .then((data) => dispatch(loadedDescriptionFilm(data)))
        .then(() => dispatch(changeLoad(false)))
       /* .catch(() => {
            dispatch(apiError(true));
            dispatch(changeLoad(false));
        })*/
};

export const registrationNew = (value) => (dispatch) => {
    dispatch(addNewUser(value));
    dispatch(userComeIn(value.name))
};

export const activateAdmin = (value) => (dispatch) => {
    dispatch(adminComeIn(value));

    GalleryService.getAllGenre()
        .then((data) => dispatch(genreLoad(data)));
};

/*
export const clickDelFilm = (value) => (dispatch) => {
    dispatch(addIdDeleteFilm(value));
    dispatch(deleteFilm(value))
};
*/
