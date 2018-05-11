import axios from 'axios';
import { history } from '../store';
import {reset, change} from 'redux-form';
import {
  SANDBOX_URL,
  SANDBOX_STEVE_URL,
  MOCK_URL,
  DEV_MOCK_URL,
  DEV_URL,
  ROOT_URL
} from './helpers/action_paths';

import {
  CURRENT_LOCATION,
  LIST_LOCATIONS,
  LIST_LOCATIONS_FAILURE
} from './helpers/types';

export const fetchCurrentLocation = (lid) => {
  return({
    type: CURRENT_LOCATION,
    payload: lid
  })
}


// ===============================================
//              LOCATIONS ACTIONS
// ===============================================



// =========================
//    REQUEST TYPE : GET
// =========================




// FETCH ALL LOCATIONS
export function returnLocations(lids) {
  return function(dispatch) {
    dispatch({
      type: LIST_LOCATIONS,
      payload: lids
    });
  }
}


export function updateLocation(lid) {
  return function(dispatch) {
    localStorage.setItem('lid', lid);
    dispatch(fetchCurrentLocation(lid));
  }
}


// =========================
//    REQUEST TYPE : POST
// =========================
