const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware


// Action Part

// Indicate Action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action Creater
function buyCake(){
  return{
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream(){
  return{
    type: BUY_ICECREAM,
    info: 'First redux action'
  }
}

// (previousState, action) => newState

const initialCakeState = {
  numOfCake: 10
}
const initialIceCreamState = {
  numOfIceCream: 10
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCake: state.numOfCake -1
    }

    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type){
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCream: state.numOfIceCream -1
    }

    default: return state
  }
}

const rootReducer= redux.combineReducers({cake : cakeReducer, iceCream: iceCreamReducer});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial State : ',store.getState());
const unsubscribe = store.subscribe(() => {

});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
unsubscribe();

