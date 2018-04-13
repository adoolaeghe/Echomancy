import React from "react";
import Card from 'material-ui/Card';

export default class Article2 extends React.Component {
  browserRedirect(pathName) {
    this.props.history.push(pathName);
  }

  render() {
    return (
      <section className="article2 row">
        <div className="dot-left" id="12" />
        <div className="dot-right " id="13" />
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
                  <p>Some text</p>
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
                  <p>Some text</p>
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
                  <p>Some text</p>
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
                  <p>Some text</p>
                </div>
              </div>
            }
            </div>
          </div>
        <Card
          className="article2-grid-left col s2 gradient-animation"
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
            <button onClick={this.props.handleFaq}
            style={{
              height: "65px",
              width: "50px",
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "cover"
            }}></button>
          <div className="dot-left" id="14" />
        </Card>
      </section>
    );
  }
}
