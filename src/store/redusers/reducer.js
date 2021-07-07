import {
    FILM_LOADED,
    ABOUT_FILM_LOADED,
    CHANGE_SORT, CHANGE_LOAD
} from "../constans";

const initialState = {
    loaded: false,
    currentPage: 1,
    typeSort: 'vote_count.desc',
    dataFilmPage: [],
    aboutFilm: []
};

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILM_LOADED:
            return {
                ...state,
                dataFilmPage: action.payload
            };
        case ABOUT_FILM_LOADED:
            return {
                ...state,
            };
        case CHANGE_SORT:
            return {
                ...state,
                typeSort: action.payload
            };
        case CHANGE_LOAD:
            return {
                ...state,
                loaded:  action.payload
            };
        default:
            return state;
    }
};

export default videoReducer
