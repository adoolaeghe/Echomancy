import React from "react";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/datatest.json";
import pieData from "../graph/pie3";
import bgConfig from "../../ryme-helpers/ryme-background";
import Avatar from 'material-ui/Avatar';
import {Doughnut} from 'react-chartjs-2';

export default class Article3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false,
      data: pieData()
    };
  }

  returnAnimation(a, b) {
    if(this.props.article3Anim) {
      return <ReactBodymovin key={1} options={b} />
    } else {
      return <ReactBodymovin key={2} options={a} />
    }
  }

  componentDidMount() {
    pieData(this.props.pieScroll);
  }

  render() {
    const legend = {
      display: false
    }

    const option = {

      responsive: false,
      cutoutPercentage: 80,
      config: {
        animation: {
          animateScale: true
        }
      }
    }
    return (
      <section
        className="ryme-article article3 row"
        style={bgConfig.noRepeat('articles/3/background.svg')}
      >
        <div
          className="article3-hash col m12 l5"
          style={bgConfig.noRepeat('main/hash-background.svg')}
        >
          <Doughnut options={option} data={this.state.data} legend={legend} width={300} height={300} />
          <a className="btn-floating pulse article3-avatar number-1">
            <Avatar style={{width: "26px", height: "26px"}} src="./public/content/images/main/avatar.jpg"/>
          </a>
          <a className="btn-floating pulse article3-avatar number-2">
            <Avatar style={{width: "26px", height: "26px"}} src="./public/content/images/main/avatar.jpg"/>
          </a>
          <a className="btn-floating pulse article3-avatar number-3">
            <Avatar style={{width: "26px", height: "26px"}} src="./public/content/images/main/avatar.jpg"/>
          </a>
          <img
            className="redirect"
            src={"./public/content/images/articles/3/button.svg"}
            alt="Kiwi standing on oval"
          />
        </div>
        <div className="acticle3-text-content col m12 l7">
        {this.props.article3Text &&
          <div className={`article3-header ${this.state.animation ? "animation" : ""}`}>
            <div className="text-block-color"></div>
            <h2>Become a music</h2>
            <h1>Publisher</h1>
            <p>
              Eco is a global currency not controlled by any single individual,
              organization, or nation. Our mission is to distribute the majority
              of the economic value generated by the Eco platform to our
              community to create a more equitable distribution of resources.
            </p>
            <a>STILL HAVE QUESTIONS? HERES FAQ PAGE</a>
          </div>
        }
        </div>
        <div className="dot-left" />
        <div className="dot-right" />
      </section>
    );
  }
}
