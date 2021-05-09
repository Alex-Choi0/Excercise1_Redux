// cookieTypes에서 구매와 판매 타입을 받아온다.
import { ADD_RESUME } from './resumeTypes';

const initialState = {
    resume : {
        Name : '',
        Email : ''
    } // 초기 이력서는 빈공간
};

// cookieReducer는 이전 toyReducer와 달리 payload에 따라 수량이 변화한다.
const resumeReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_RESUME: // 가게에서 쿠키를 사기 때문에 -payload한다.

            return {
                ...state,
                resume : action.payload
            }
        

        default : return state // 해당 타입이 아니면 그대로 state를 return 한다.
    }
}

export default resumeReducer;