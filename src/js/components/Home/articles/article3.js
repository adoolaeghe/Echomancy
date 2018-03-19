import React from "react";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/data.json";
import returnArtcicle3Pie from "../graph/article3Pie"

export default class Article3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false
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
    returnArtcicle3Pie();
  }

  render() {
    const bodymovinOptions = {
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: animation
    };
    const bodymovinOptions1 = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: animation
    };
    return (
      <section
        className="article3 row"
        style={{
          background:
            "url(./public/content/images/articles/article3-background.svg) no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          className="article3-hash col s5"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)",
          }}
        >
        <div
          id="container3"
          style={{
          
            position: "absolute"
          }}
        />
          <img
            className="redirect"
            src={"./public/content/images/articles/article3-button.svg"}
            alt="Kiwi standing on oval"
          />
        </div>
        <div className="acticle3-text-content col s7">
        {this.props.article3Text &&
          <div className={`article3-header ${this.state.animation ? "animation" : ""}`}>
            <div className="" style={{marginLeft: "30px", textAlign: "left", height: "10px", width: "70px", backgroundColor: "#8188E7", marginBottom: "20px" }}>
            </div>
            <h2>Become a music</h2>
            <h1>Publisher</h1>
            <p>
              Eco is a global currency not controlled by any single individual,
              organization, or nation. Our mission is to distribute the majority
              of the economic value generated by the Eco platform to our
              community to create a more equitable distribution of resources.
            </p>
            <a>Read this link</a>
          </div>
        }
        </div>
        <div className="dot-left" id="19" />
        <div className="dot-right" id="20" />
      </section>
    );
  }
}
