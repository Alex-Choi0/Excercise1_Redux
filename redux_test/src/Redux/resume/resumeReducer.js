// resumeTypes에서 이력서 지원 타입을 받아온다.
import { ADD_RESUME } from './resumeTypes';

// 지원자의 이름과 이메일을 state로 저장한다
const initialState = {
    resume : {
        Name : '',
        Email : ''
    } // 초기 이력서는 빈공간
};

// cookieReducer는 이전 toyReducer와 달리 payload에 따라 수량이 변화한다.
const resumeReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_RESUME: // 이력서를 지원하는 액션이다.

            return {
                ...state,
                resume : action.payload // 이력서는 덮어씌운다
            }
        

        default : return state // 해당 타입이 아니면 그대로 state를 return 한다.
    }
}

export default resumeReducer;