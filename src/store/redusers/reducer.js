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

const initialState = {
    loaded: true,
    apiError: false,
    currentPageState: 1,
    typeSort: 'vote_count.desc',
    dataFilmPage: [],
    dataGenre: [],
    dataDelFilm:[],
    aboutFilm: [],
    adminMode: false,
    activUser: null,
    basaUser: [
        {emailUser: 'zxc@vc.sd', passwordUser: 1234, name: 'Ivan', surname: ''},
        {emailUser: 'admin@tut.by', passwordUser: 4321, name: 'Admin', surname: ''}
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

        case ADD_ID_DELETE_FILM:
            return {
                ...state,
                dataDelFilm: [...state.dataDelFilm, action.payload]
            };

        case GENRE_LOAD:
            return {
                ...state,
                dataGenre: action.payload
            };

        case DELETE_FILM:
            return {
                ...state,
                dataFilmPage: action.payload
            };

        case ADMIN_COME_IN:
            return {
                ...state,
                adminMode: action.payload
            };

        case USER_COME_IN:
            return {
                ...state,
                activUser: action.payload
            };

        case API_ERROR:
            return {
                ...state,
                apiError: action.payload
            };

        case ADD_NEW_USER:
            return {
                ...state,
                basaUser: [...state.basaUser, action.payload]
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
                loaded: action.payload
            };

        default:
            return state;
    }
};

export default videoReducer
