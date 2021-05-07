import React from 'react';
import { connect } from 'react-redux'; // react, redux연결
import { buyToy, sellToy } from '../Redux'; // toy action 연결

// 위 함수는 App.js에 추가할 component
function ToyPart(props){
    console.log('Toy(props) : ',typeof props ,props);
    console.log('Toy(props.numberOfToys) : ',typeof props.numOfToys.numOfToys ,props.numOfToys.numOfToys);
    
    // return할 component
    return (
        <div>
            <h2>Number of Toys -{props.numOfToys} </h2>
            <button onClick = {props.buyToy}>Buy Toys</button>
            <button onClick = {props.sellToy}>Sell Toys</button>
        </div>
    )
}

// Redux실행시 현재 state에 저장된 기록을 불러옵니다.
const mapStateToProps = (state) => {
    console.log('mapStateToProps : ', state);
    return {
        numOfToys : state.numOfToys,
    }
}

// Redux실행시 각 action에 따른 method를 Arrow function에따라 dispatch합니다.
const mapDispatchToProps = (dispatch) => {
    return {
        buyToy : () => {
            dispatch(buyToy());
        },
        sellToy : () => {
            dispatch(sellToy());
        }
    }
}

// 각파트를 connect를 이용하여 React와 Redux를 연결합니다.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToyPart);