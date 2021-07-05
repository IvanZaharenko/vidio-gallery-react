import {FILM_LOADED, ABOUT_FILM_LOADED} from "../constans";

const initialState = {
    isLoaded: true,
    dataFilm:{
        dataPage: [],
        aboutFilm:[]
    }
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
        default:
            return state;
    }
};

export default videoReducer
