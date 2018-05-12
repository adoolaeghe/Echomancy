import {
  AUTH_HEADER,
} from '../constant/types';

let initialState = {
  listLocations: []
};

export default function(state = initialState, action) {

  switch(action.type) {
    case AUTH_HEADER:
      return { ...state, listLocations: action.payload };
  }

  return state;
}
