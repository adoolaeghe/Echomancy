import React from "react";
import pieData from "../graph/piePlayer";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Card from "material-ui/Card";
import Slider from "material-ui/Slider";
import bgConfig from "../../ryme-helpers/ryme-background";
import {Doughnut} from 'react-chartjs-2';
import smoothfade from 'smoothfade';
import CircularProgress from 'material-ui/CircularProgress';
import BufferLoader from './bufferLoader';

import { connect } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from '../../../store/store';
import * as actions from '../../../actions/player-actions';

let audioCtx = new AudioContext();
let source = audioCtx.createBufferSource();
let request = new XMLHttpRequest();
let gainNodes = [];
let sources = [];
let smoothfades = [];
let urlList = [
	'public/content/images/songs/Ants.m4a',
	'public/content/images/songs/Dean-Martin.mp3',
	'public/content/images/songs/gorillaz.mp3',
]

// Define a new buffer
let bufferLoader = new BufferLoader(audioCtx, urlList);
bufferLoader.load();

export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: "pause",
			showPlayBtn: false,
			data: pieData(),
			angles: [0, 0, 0],
			track1: 1,
			zIndexs: [3, 2, 1],
			currentNode: 1,
		};
	}

	componentWillMount() {
		audioCtx.resume();
		this.finishedLoading(bufferLoader);
		setInterval(() => {
			switch(this.state.track1) {
				case 1:
					this.handleLoop(0, 2, [2, 1, 3], [this.state.angles[0]+1, this.state.angles[1],this.state.angles[2]], [this.state.angles[0], this.state.angles[1],0]);
					break;
				case 2:
					this.handleLoop(1, 3, [3, 2, 1], [this.state.angles[0], this.state.angles[1]+1, this.state.angles[2]], [0, this.state.angles[1], this.state.angles[2]]);
					break;
				case 3:
					this.handleLoop(2, 1, [1, 3, 2], [this.state.angles[0], this.state.angles[1], this.state.angles[2]+1], [this.state.angles[0], 0, this.state.angles[2]]);
					break;
			}
		}, 150)
	}

	handleLoop(i, track, zIndex, angles, angles1) {
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

	renderCircularProgress(num) {
		let circularProgress = [];
		let colors = ["#0F3FD5", "#FEBE65", "#6884FB"]
		for (var i = 0; i <= num; i++) {
			circularProgress.push(
				<CircularProgress
					style={{position: "absolute", zIndex: this.state.zIndexs[i]}}
					mode="determinate"
					value={this.state.angles[i]}
					size={90}
					key={i}
					color={colors[i]}
					thickness={5}
				/>
			);
		}
		return (
			<div className={`progress-circles ${this.state.playing}`}>
				{circularProgress}
			</div>
		)
	}

	finishedLoading(bufferList) {
		audioCtx.resume();
		console.log(urlList)
		for(let i = 0; i <= urlList.length; i++) {
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
	controlPlay(control) {
		audioCtx.resume();
		for(let i = 0; i <= urlList.length; i++) {
			if(gainNodes[i].gain.value != 0) {
				gainNodes[i].gain.value = 0;
				if(control === 'next') {
					gainNodes[i+1].gain.value = 1;
					this.setState({
						currentNode: this.state.currentNode + 1
					})
				} else {
					gainNodes[i-1].gain.value = 1;
					this.setState({
						currentNode: this.state.currentNode - 1
					})
				}
				return;
			}
		}
	}

	handlePlayClick() {
		this.props.playerClick();
		if (this.state.playing === "pause") {
			this.play();
			this.setState({
				playing: "playing",
				showPlayBtn: true
			})
		} else {
			this.pause();
			this.setState({
				playing: "pause"
			});
		}
	}

	play() {
		audioCtx.resume();
		gainNodes[this.state.currentNode].gain.value = 1;
	}

	pause() {
		audioCtx.resume();
		gainNodes[this.state.currentNode].gain.value = 0;
	}

	render() {
		const legend = {
			display: false
		}

		return (
			<div className={`player player-wrapper ${this.props.size}`}>
				<div className={`player-wrapper rotating ${this.props.size} `}>
					<Doughnut data={this.state.data} legend={legend} width={370} height={370} />
				</div>
				{this.state.showPlayBtn && (
					<Card className="row" zDepth={5} style={{borderTop: "4px solid blue", backgroundColor: "white", width: "42.8%", height: "100px", left: "0", position: "fixed", bottom: "0px"}}>
						<div className="" style={{height: "100%", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
							{this.state.currentNode > 0 && (
								<div style={{height: "30px", cursor: "pointer", width: "30px",borderRadius: "50px",backgroundColor: "white", border: "1px solid lightgrey", margin: "10px"}}
										 onClick={() => {this.controlPlay("back")}}></div>
							 )}
							 <div style={{height: "40px", cursor: "pointer", width: "40px",borderRadius: "50px",backgroundColor: "white", border: "1px solid red", margin: "10px"}}
										onClick={() => {this.handlePlayClick()}}></div>
								{this.state.currentNode < 2 && (
									<div style={{height: "30px", cursor: "pointer", width: "30px",borderRadius: "50px",backgroundColor: "white", border: "1px solid lightgrey", margin: "10px"}}
											 onClick={() => {this.controlPlay("next")}}></div>
							)}
							<div>
								<p>artist name</p>
								<p>song Name</p>
							</div>
						</div>
					</Card>
				)}
				<div
					className={`player-cover ${this.props.size} ${this.state.playing}`}
					onClick={() => {
						this.handlePlayClick();
					}}>
					{this.props.size != "small" && (
						<div className={`player-cover-image ${this.props.size} ${this.state.playing}`}
								 style={{backgroundImage: 'url(./public/content/images/album-cover.jpg	)', backgroundSize:"100%"}}>
							<div className={`player-btn-icon ${this.state.playing}`}
									 style={bgConfig.noRepeat('main/play.svg')}>
									{this.state.playing === "playing" && (
										<div style={{borderRadius: "50px", width: "73px", height: "73px"}}></div>
									)}
									{this.renderCircularProgress(2)}
							</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
