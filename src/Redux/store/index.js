import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index"
import { forbiddenWordsMiddleware, likesMiddleware } from "../middleware/index"


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, likesMiddleware))
    );

export default store;
