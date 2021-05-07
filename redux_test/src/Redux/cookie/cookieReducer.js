// cookieTypes에서 구매와 판매 타입을 받아온다.
import { BUY_COOKIE, SELL_COOKIE } from './cookieTypes';

const initialState = {
    numOfCookie : 20 // 초기 쿠기 갯수는 20개
};

// cookieReducer는 이전 toyReducer와 달리 payload에 따라 수량이 변화한다.
const cookieReducer = (state = initialState, action) => {
    
    switch(action.type){
        case BUY_COOKIE: // 가게에서 쿠키를 사기 때문에 -payload한다.

            return {
                ...state,
                numOfCookie : (state.numOfCookie - action.payload)
            }
        
        case SELL_COOKIE: // 가게에서 쿠키를 사기 때문에 +payload한다.
            return {
                ...state,
                numOfCookie : (state.numOfCookie + action.payload)
            }

        default : return state // 해당 타입이 아니면 그대로 state를 return 한다.
    }
}

export default cookieReducer;