import { BUY_TOY, SELL_TOY } from './toyTypes'; // toyTypes에서 구매와 판매 타입을 받아온다.

const initialState = {
    numOfToys : 20 // 초기 장난감 진열 갯수는 20개
};

const toyReducer = (state = initialState, action) => {
    
    switch(action.type){
        case BUY_TOY: // 가게에서 장난감을 사기 때문에 +1한다

            return {
                ...state,
                numOfToys : state.numOfToys + 1
            }
        
        case SELL_TOY: // 가게에서 장난감을 사기 때문에 -1한다
            return {
                ...state,
                numOfToys : state.numOfToys - 1
            }

        default : return state // 해당 타입이 아니면 그대로 state를 return 한다.
    }
}

export default toyReducer;