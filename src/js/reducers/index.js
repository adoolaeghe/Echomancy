import {
  LIST_PLAYER
} from './actions'

const initialState = {

}

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_PLAYER:
      return { ...state, loaded: true };

    default:
      return state;
  }
}
