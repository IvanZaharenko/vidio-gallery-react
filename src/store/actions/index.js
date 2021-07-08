import {
    FILM_LOADED,
    ABOUT_FILM_LOADED,
    CHANGE_SORT,
    CHANGE_LOAD,
    CHANGE_CURRENT_PAGE
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
};
