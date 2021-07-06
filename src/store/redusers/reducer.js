import {FILM_LOADED, ABOUT_FILM_LOADED, FORM, CHANGE_SORT} from "../constans";

const initialState = {
    isLoaded: true,
    dataFilm:{
        dataPage: [],
        aboutFilm:[],
        typeSort: 'vote_count.desc'
    },
    testForm:[]
};

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILM_LOADED:
            return {
                ...state,
            };
        case ABOUT_FILM_LOADED:
            return {
                ...state,
            };
        case FORM:
            return {
                ...state,
               testForm: [...state.testForm, action.payload]
            };
        case CHANGE_SORT:
            return {
                ...state,
                dataFilm: {...state.dataPage, ...state.aboutFilm, typeSort:  action.payload}
            };
        default:
            return state;
    }
};

export default videoReducer
