import {CHANGE_PROJECT_NAME, CHANGE_PROJECT_CODE, FETCH_DATA} from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialProjectState = { name : "initial", code : "initial" };

export default function projectReducer(state = initialProjectState, action) {
    let newState;
    switch (action.type) {
        case CHANGE_PROJECT_NAME:
            newState = objectAssign({}, state, {name: action.name});
            break;
        case CHANGE_PROJECT_CODE:
            newState = objectAssign({}, state, {code: action.code});
            break;
        case FETCH_DATA:
            newState = objectAssign({}, state, action.project);
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}