import {createStore} from "redux";  // this has been deprectaed please find a replacement
import rootReducer from "./reducers";

const store =createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;