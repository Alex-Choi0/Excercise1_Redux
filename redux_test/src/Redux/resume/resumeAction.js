import { ADD_RESUME } from './resumeTypes';

export const addResume = (resume = {Name : '', Email : ''}) => {
    return {
        type : ADD_RESUME,
        payload : resume
    }
}
