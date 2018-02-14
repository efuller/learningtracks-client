import { FETCH_USER } from './actionTypes';

function getUser() {
    return {
        type: FETCH_USER,
        id
    }
}

export const fetchUser = (id) => dispatch => dispatch(getUser(id));