import {
    FILM_LOADED,
    ABOUT_FILM_LOADED,
    CHANGE_SORT, CHANGE_LOAD, CHANGE_CURRENT_PAGE, API_ERROR, USER_COME_IN
} from "../constans";

const initialState = {
    loaded: true,
    apiError: false,
    currentPageState: 1,
    typeSort: 'vote_count.desc',
    dataFilmPage: [],
    aboutFilm: [],
    adminMode: false,
    basaUser: [{
        emailUser: '111@22.33', passwordUser: 1234
    },
        {emailUser: 'admin@tut.by', passwordUser: 4321}
    ]
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
        case USER_COME_IN:
            return{
                ...state,

            };

        case API_ERROR:
            return {
                ...state,
                apiError: action.payload
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
