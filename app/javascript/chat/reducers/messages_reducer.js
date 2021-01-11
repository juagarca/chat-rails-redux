import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions';

export default function(state = null, action) {
  // console.log("aki");
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      const stateDuplicated = state.slice();
      stateDuplicated.push(action.payload);
      return stateDuplicated;
    default:
      return state;
  }
}
