import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import logger from "./middleware/logger"
import videoReducer from "./redusers/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    videos: videoReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store

