import toyReducer from './toy/toyReducer';
import cookieReducer from './cookie/cookieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    toyReducer,
    cookieReducer
})

console.log("rootReducer : ", rootReducer);

export default rootReducer;