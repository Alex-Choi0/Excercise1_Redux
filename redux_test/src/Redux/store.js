import { createStore } from 'redux'; // store를 만들기 위해 import
import rootReducer from './rootReducer'; // reducer에서 store를 사용하기 위해 import

const store = createStore(rootReducer);

export default store;