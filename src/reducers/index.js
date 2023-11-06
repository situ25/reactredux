// This will have one main reducer

import changeNumber from "./upDown";

// import thunk from "redux-thunk" 
import {combineReducers} from 'redux';


const rootReducer =combineReducers({
    changeNumber,
    //Here the other reducers willl come
});


export default rootReducer