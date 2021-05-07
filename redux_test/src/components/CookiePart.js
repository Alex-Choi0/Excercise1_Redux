import {React, useState} from 'react';
import { connect } from 'react-redux'; // react, redux연결
import { buyCookie, sellCookie } from '../Redux'; // toy action 연결

// 위 함수는 App.js에 추가할 component
function CookiePart(props){
    const[number, setNumber] = useState(1);

    console.log('Cookie(props) : ',typeof props ,props);
    console.log('Cookie(props.numberOfCookie) : ',typeof props.numOfCookie ,props.numOfCookie);
    
    // return할 component
    return (
        <div>
            <h2>Number of Cookies -{props.numOfCookie} </h2>
            <input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)} />
            <button onClick = {() => props.buyCookie(number)}>Buy {number} Cookies</button>
            <button onClick = {() => props.sellCookie(number)}>Sell {number} Cookies</button>
        </div>
    )
}

// Redux실행시 현재 state에 저장된 기록을 불러옵니다.
const mapStateToProps = (state) => {
    console.log('mapStateToProps : ', state);
    return {
        numOfCookie : state.cookieReducer.numOfCookie
    }
}

// Redux실행시 각 action에 따른 method를 Arrow function에따라 dispatch합니다.
const mapDispatchToProps = (dispatch) => {
    return {
        buyCookie : (num) => {
            dispatch(buyCookie(num));
        },
        sellCookie : (num) => {
            dispatch(sellCookie(num));
        }
    }
}

// 각파트를 connect를 이용하여 React와 Redux를 연결합니다.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CookiePart);