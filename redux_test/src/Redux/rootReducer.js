import toyReducer from './toy/toyReducer';
import cookieReducer from './cookie/cookieReducer';
import resumeReducer from './resume/resumeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    toyReducer,
    cookieReducer,
    resumeReducer
})

console.log("rootReducer : ", rootReducer);

export default rootReducer;