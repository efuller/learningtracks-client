import { FETCH_USER } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
}
