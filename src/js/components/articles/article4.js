import React from "react";
import Modal1 from "../modals/modal1"
import {Modal, Button} from "react-materialize";

export default class Arcticle4 extends React.Component {
  render() {
    return(
      <section className="article4 row"
               style={{background: 'url(./public/content/images/article4-background.svg) no-repeat',
                       backgroundSize: 'cover'}}>
        <div className="article4-text-content col s12">
          <div className="header-line-left col s2"></div>
          <h1 className="article4-header col s4">Reveal</h1>
          <h2 className="article4-sub-header col s5 pull-s1">New songs</h2>
          <Modal
            header='Modal Header'
            fixedFooter
            trigger={<Button className="slider-btn"><p>+</p></Button>}>
            <Modal1 />
          </Modal>
        </div>
        <div className="article4-slider"></div>
        <img className="slider-button"
             src={"./public/content/images/sliders/slider-button-1.svg"}
             alt="Kiwi standing on oval">
        </img>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
        <div className="article4-main bottom-info col s12">
          <div className="bottom-info-content">
            Content is first published with limited number of shares.
          </div>
        </div>
      </section>
    )
  }
}
