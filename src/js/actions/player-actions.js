
import {
  AUTH_HEADER,
} from '../constant/types';

export function handlePlayClick(playingState) {
  if (playingState === "pause") {
    dispatch({
      type: UPDATE_PLAY,
      payload: "playing"
    })
  } else {
    dispatch({
      type: UPDATE_PLAY,
      payload: "pause"
    })
  }
}

export function handleLoop(i, track, zIndex, angles, angles1) {
  if(this.state.angles[i]  < 100){
    this.setState({
      angles: angles
    })
  } else {
    this.setState({
      angles: angles1,
      track1: track,
      zIndexs: zIndex
    })
  }
}


export function finishedLoading(bufferList) {
  audioCtx.resume();
  for(let i = 0; i <= this.props.urlList.length; i++) {
    // Set the nodes fot all urls.
    gainNodes[i] = audioCtx.createGain();
    gainNodes[i].gain.value = 0;
    gainNodes[i].connect(audioCtx.destination);
    smoothfades[i] = smoothfade(audioCtx, gainNodes[i]);

    // Set the sources fot all urls.
    sources[i] = audioCtx.createBufferSource();
    sources[i].buffer = bufferList.bufferList[i];
    sources[i].loop = true;
    sources[i].loopStart = 100;
    sources[i].loopEnd = 115;
    sources[i].connect(gainNodes[i]);
    sources[i].start(0, 100);
  }
}

//// NEED TO HANDLE FILTER IN A NEW LOOP
export function playerControl(control, gainNodes, urlList, currentNode) {
  for(let i = 0; i <= urlList.length; i++) {
    if(gainNodes[i].gain.value != 0) {
      // mute current song
      gainNodes[i].gain.value = 0;
      if(control === 'next') {
        // play next song
        gainNodes[i+1].gain.value = 1;
        currentNode = currentNode + 1;

        dispatch({
          type: UPDATE_GAIN,
          payload: gainNodes
        });
        dispatch({
          type: UPDATE_CURRENT_NODE,
          payload: gainNodes
        });
      } else {
        gainNodes[i-1].gain.value = 1;
        currentNode = currentNode - 1;

        dispatch({
          type: UPDATE_GAIN,
          payload: gainNodes
        });

        dispatch({
          type: UPDATE_CURRENT_NODE,
          payload: currentNode
        });
      }
      return;
    }
  }
}



export function play(gainNodes, currentNode) {
  gainNodes[currentNode].gain.value = 1;
  dispatch({
    type: UPDATE_GAIN,
    payload: gainNodes
  });
}

export function pause(gainNodes, currentNode) {
  audioCtx.resume();
  gainNodes[currentNode].gain.value = 0;
  dispatch({
    type: UPDATE_GAIN,
    payload: gainNodes
  });
}
