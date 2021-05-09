import {React, useState} from 'react';
import { connect } from 'react-redux'; // react, redux연결
import { addResume } from '../Redux'; // resume action 연결

// 위 함수는 App.js에 추가할 component
function ResumePart(props){
    const[resumeName, setResumeName] = useState('');
    const[resumeEamil, setResumeEmail] = useState('');
    
    
    // return할 component
    return (
        <div>
            <h2>Resume</h2>
                <div>
                    <label>Name</label>
                    <input type = 'text' 
                        value = {resumeName} 
                        onChange = {e => setResumeName(e.target.value)} />
                </div>
                <div>
                    <label>email</label>
                    <input type = 'text' 
                        value = {resumeEamil} 
                        onChange = {e => setResumeEmail(e.target.value)} />
                </div>
                <div>
                    <button 
                        onClick = {
                            () => {
                            console.log("resumeName,resumeEamil------------>",resumeName);
                            props.addResume({
                                Name : resumeName,
                                Email : resumeEamil
                            })
                    }}>Submit</button>
                </div>
            
        </div>
    )
}

// Redux실행시 현재 state에 저장된 기록을 불러옵니다.
const mapStateToProps = (state) => {
    console.log('mapStateToProps : ', state);
    return {
        resume : state.resumeReducer.resume
    }
}

// Redux실행시 각 action에 따른 method를 Arrow function에따라 dispatch합니다.
const mapDispatchToProps = (dispatch) => {
    return {
        addResume : (resume) => {
            dispatch(addResume(resume));
        }
    }
}

// 각파트를 connect를 이용하여 React와 Redux를 연결합니다.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumePart);

// export default ResumePart;