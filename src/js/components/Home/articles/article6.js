import React from "react";
import Player from "../player/player"
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import Slider from 'material-ui/Slider';
import Graph from '../graph/homeGraph';

/// SLIDER REFACTORING ///
const min = 0;
const max = 100;
const power = 12;

function transform(value) {
  return value + 1;
}

function reverse(value) {
  return value - 1;
}

export default class Article6 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalNbShares: 4,
      crtSharePrice: 1,
      crtNbOfShare: 4,
      crtShareValue: 1,
      totalValue: 4,
      initialNbOfShare: 4,
      initialSharePrice: 1,
      priceIncrementor: 2,
      shareIncrementor: 2,
      crtSharePrice: 0,
      slider: 4,
    }
  }

  handleCrtShare(layerNb, shareIncrementor, priceIncrementor, nbOfShare, price, crtShare){
    let totNote = 4;

    for(var i = 0; i < layerNb; i++) {
      for(var j = 0; j < nbOfShare; j++) {
        totNote++
        if(totNote === crtShare) {
          this.setState({
            crtNbOfShare: totNote,
            crtSharePrice: price
          })
        }
      }
      price = price * priceIncrementor;
      nbOfShare = nbOfShare * shareIncrementor;
    }
  }

  handleTotPayout(layerNb, shareIncrementor, priceIncrementor, NbOfShare, price){
    let to_return = 0;
    let totVal = 4 * price;
    for(var i = 0; i < layerNb; i++) {
      if(i === layerNb-1){to_return = totVal/2}
      for(var j = 0; j < NbOfShare; j++) {
        totVal = totVal + price;
      }
      price = price * priceIncrementor;
      NbOfShare = NbOfShare * shareIncrementor;
    }
    return to_return;
  }

  handleTotValue(layerNb, shareIncrementor, priceIncrementor, nbOfShare, price) {
    let totVal = 4 * price;
    for(var i = 0; i < layerNb; i++) {
      for(var j = 0; j < nbOfShare; j++) {
        totVal = totVal + price;
      }
      price = price * priceIncrementor;
      nbOfShare = nbOfShare * shareIncrementor;
    }
    return totVal;
  }

  handleTotShare(layerNb, shareIncrementor, priceIncrementor, nbOfShare, price) {
    let totNote = 4;
    for(var i = 0; i < layerNb; i++) {
      for(var j = 0; j < nbOfShare; j++) {
        totNote++
      }
      nbOfShare = nbOfShare * shareIncrementor;
    }
    return totNote;
  }

  handleSlider = (event, value) => {
    console.log('herre')
    this.setState({slider: transform(value)});
    this.handleCrtShare(this.state.initialNbOfShare,
                          this.state.shareIncrementor,
                          this.state.priceIncrementor,
                          this.state.initialNbOfShare,
                          this.state.initialSharePrice,
                          value
                          )
  };

  handleSongPartRender() {
    let to_return = [];
    let key = 1;
    for(let i = 0; i < this.state.slider; i++) {
      to_return.push(
        <div className="article7-info2-content-element" key={key}></div>
      )
      key++
    }
    return to_return;
  }

  render() {

    let initialNbOfShare = this.state.initialNbOfShare;
    let shareIncrementor = this.state.shareIncrementor;
    let priceIncrementor = this.state.priceIncrementor;
    let initialSharePrice = this.state.initialSharePrice;

    return(
      <section className="article7 row"
               style={
                 {backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}
               }>
        <div className="article7-left col s2">
          <div className="article7-left-label drag">
            Drag to see the evolution from the track
          </div>
        </div>
        <div className="article7-main col s10">
          <div className="article7-main-visual col s12"
               style={{position:"relative"}}>
            <div className="article7-main-label"
                 style={{position:"absolute"}}>
              <span>Artist Payout: </span>
              {this.handleTotPayout(initialNbOfShare,
                                    shareIncrementor,
                                    priceIncrementor,
                                    initialNbOfShare,
                                    initialSharePrice)}
            </div>
            <Graph totalNbShares={this.state.shareIncrementor}
                   maxNbShares= {this.state.maxNbShares}
                   initialNbOfShare= {initialNbOfShare}
                   initialSharePrice= {initialSharePrice}
                   priceIncrementor= {priceIncrementor}
                   shareIncrementor= {shareIncrementor}
                   slideVal={this.state.slider}/>
          </div>
          <div className="article7-main-info1 col s12"
               style={{zIndex: "1"}}>
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Total Amount</div>
              <div className="col s3 info-val">
                {this.handleTotValue(initialNbOfShare,
                                     shareIncrementor,
                                     priceIncrementor,
                                     initialNbOfShare,
                                     initialSharePrice)}
              </div>
              <div className="col s4"></div>
            </div>
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Current Share Price</div>
              <div className="col s3 info-val">
                {this.state.crtNbOfShare}
              </div>
              <div className="col s4"></div>
            </div>
          </div>
          <div className="article7-main-info2 col s12">
            <div className="article7-info2-content cols12">
              {this.handleSongPartRender()}
            </div>
            <Slider
              min={initialNbOfShare}
              max={this.handleTotShare(initialNbOfShare,
                                   shareIncrementor,
                                   priceIncrementor,
                                   initialNbOfShare,
                                   initialSharePrice)}
              step={max / 100}
              onChange={this.handleSlider}
            />
          </div>
          <div className="article7-main-info3 col s12">
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Total Amount</div>
              <div className="col s3 info-val">
                {this.handleTotShare(initialNbOfShare,
                                     shareIncrementor,
                                     priceIncrementor,
                                     initialNbOfShare,
                                     initialSharePrice)}
              </div>
              <div className="col s4"></div>
            </div>
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Current Risk Price</div>
              <div className="col s3 info-val">{this.state.crtSharePrice}</div>
              <div className="col s4"></div>
            </div>
          </div>
          <div className="article7-main-info5 col s12 row">
            <div className="col s3 options row">
              <div className="col s12 options-label">
                Layer number
              </div>
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        disabled={(initialNbOfShare < 1) ? true : false}
                                        onClick={() => {
                                          this.setState({
                                            initialNbOfShare: initialNbOfShare - 1
                                          })
                                        }}>
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        disabled={(initialNbOfShare > 9) ? true : false}
                                        onClick={() => {this.setState({
                                          initialNbOfShare: initialNbOfShare + 1
                                        })
                                      }}>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
            <div className="col s1 options-val">
              {initialNbOfShare}
            </div>
            <div className="col s3 options">
              <div className="col s12 options-label">
                Initial Share Price
              </div>
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        disabled={(initialSharePrice < 1) ? true : false}
                                        onClick={() => {this.setState({
                                            initialSharePrice: initialSharePrice - 1
                                          })
                                        }}>
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        disabled={(initialSharePrice > 4) ? true : false}
                                        onClick={() => {this.setState({
                                            initialSharePrice: initialSharePrice + 1
                                          })
                                        }}>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
            <div className="col s1 options-val">
              {initialSharePrice}
            </div>
          </div>
        </div>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
      </section>
    )
  }
}
