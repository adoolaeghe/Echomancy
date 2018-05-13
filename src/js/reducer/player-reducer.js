import {
  AUTH_HEADER,
} from '../constant/types';

let initialState = {
  playing: "pause",
  audioCtx : new AudioContext(),
  gainNodes : [],
  currentNode: 1,
  sources : [],
  smoothfades : [],
  urlList : [
  	'public/content/images/songs/Ants.m4a',
  	'public/content/images/songs/Dean-Martin.mp3',
  	'public/content/images/songs/gorillaz.mp3',
  ],
  zIndexs: [3, 2, 1],
  track1: 1,
  angles: [0, 0, 0],
  showPlayBtn: false,
  gainNodes : [],
  sources : [],
  smoothfades : []
};

export default function(state = initialState, action) {

  switch(action.type) {
    case AUTH_HEADER:
      return { ...state, listLocations: action.payload };
  }

  return state;
}
