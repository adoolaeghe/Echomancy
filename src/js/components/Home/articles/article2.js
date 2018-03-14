import React from "react";

export default class Article2 extends React.Component {
  browserRedirect(pathName) {
    this.props.history.push(pathName);
  }

  render() {
    return (
      <section className="article2 row">
        <div className="dot-left" id="12" />
        <div className="dot-right" id="13" />
          <div className="article2-main col s10 hash-background">
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-1">
                <div className="col s3 article2-main-number">
                  01.
                </div>
                <div className="col s9 article2-main-title">
                  <div>Reveal</div>
                  <p>Some text to explain the first step</p>
                </div>
              </div>
            }
            </div>
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-2">
                <div className="col s3 article2-main-number">
                  01.
                </div>
                <div className="col s9 article2-main-title">
                  <div>Reveal</div>
                  <p>Some text to explain the first step</p>
                </div>
              </div>
            }
            </div>
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-3">
                <div className="col s3 article2-main-number">
                 01.
                </div>
                <div className="col s9 article2-main-title">
                  <div>Reveal</div>
                  <p>Some text to explain the first step</p>
                </div>
              </div>
            }
            </div>
            <div className="article2-main-column col s3">
            {this.props.article2Main &&
              <div className="article2-main-content"
                   id="article2-4">
                <div className="col s3 article2-main-number">
                  01.
                </div>
                <div className="col s9 article2-main-title">
                  <div>Reveal</div>
                  <p>Some text to explain the first step</p>
                </div>
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
