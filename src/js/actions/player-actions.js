import { history } from '../store/store';

import {
  AUTH_HEADER,
} from '../constant/types';

// FETCH ALL LOCATIONS
export function returnPlayerUrls() {
  return function() {
    dispatch({
      type: PLAYER_URL,
      payload: lids
    });
  }
}

export function playerNext() {
  return function() {
    dispatch({
      type: PLAYER_NEXT,
      payload: lids
    });
  }
}

export function playerBack() {
  return function() {
    dispatch({
      type: PLAYER_BACK,
      payload: lids
    });
  }
}
