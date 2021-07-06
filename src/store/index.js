import {createStore, combineReducers, compose} from "redux";
import videoReducer from "./redusers/reducer"

const rootReducer = combineReducers({
    videos: videoReducer,
});

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store

