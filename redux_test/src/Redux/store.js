import { createStore } from 'redux'; // store를 만들기 위해 import
import toyReducer from './toy/toyReducer'; // reducer에서 store를 사용하기 위해 import

const store = createStore(toyReducer);

export default store;