import React from "react";

export default class Article2 extends React.Component {
  browserRedirect(pathName) {
    this.props.history.push(pathName);
  }

  render() {
    console.log(this.props.article2Main)
    return (
      <section className="article2 row">
        <div className="dot-left" id="12" />
        <div className="dot-right" id="13" />
          <div className="article2-main col s10 hash-background">
            <div className="article2-main-column col s3" style={{ textAlign: "left", marginLeft: "50px" }}>
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-1">
                <p>01</p>
                <p>Reveal</p>
              </div>
            }
            </div>
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-2">
                <p>01</p>
                <p>Reveal</p>
              </div>
            }
            </div>
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-3">
                <p>01</p>
                <p>Reveal</p>
              </div>
            }
            </div>
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-4">
                <p>01</p>
                <p>Reveal</p>
              </div>
            }
            </div>
          </div>
        <div
          className="article2-grid-left col s2 gradient-animation"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg),url(./public/content/images/main/hash-background-reverse.svg)"
          }}
        >
          <button
            onClick={() => {
              this.browserRedirect("/murwall");
            }}
          >
            <p>BETA</p>
          </button>
          <div className="dot-left" id="14" />
        </div>
      </section>
    );
  }
}
