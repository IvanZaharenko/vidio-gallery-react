import {
    FILM_LOADED,
    ABOUT_FILM_LOADED,
    CHANGE_SORT, CHANGE_LOAD, CHANGE_CURRENT_PAGE
} from "../constans";

const initialState = {
    loaded: true,
    currentPageState: 1,
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

            case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPageState: action.payload
            };

        case ABOUT_FILM_LOADED:
            return {
                ...state,
                aboutFilm: action.payload
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
