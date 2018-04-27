import React from "react";
import Card from 'material-ui/Card';
import bgConfig from "../../ryme-helpers/ryme-background";

export default class Article2 extends React.Component {
  
  shouldComponentUpdate(nextProps) {
    if(this.props != nextProps) {
      return true;
    }
    return false
  }

  render() {
    return (
      <section className="ryme-article article2 row">
        <div className="dot-left" />
        <div className="dot-right" />
          <div className="article-main row col m6 l10">
            <div className="article-main-column col m12 l3">
            {this.props.article2Main &&
              <div className="article-main-content"
                   id="article2-1">
                <div className="col s3 article-main-number">
                  01.
                </div>
                <div className="col s9 article-main-title">
                  <div>Reveal</div>
                  <p>Some text</p>
                </div>
              </div>
            }
            </div>
            <div className="article-main-column col m12 l3">
            {this.props.article2Main &&
              <div className="article-main-content"
                   id="article2-2">
                <div className="col s3 article-main-number">
                  01.
                </div>
                <div className="col s9 article-main-title">
                  <div>Reveal</div>
                  <p>Some text</p>
                </div>
              </div>
            }
            </div>
            <div className="article-main-column col m12 l3">
            {this.props.article2Main &&
              <div className="article-main-content"
                   id="article2-3">
                <div className="col s3 article-main-number">
                 01.
                </div>
                <div className="col s9 article-main-title">
                  <div>Reveal</div>
                  <p>Some text</p>
                </div>
              </div>
            }
            </div>
            <div className="article-main-column col m12 l3">
            {this.props.article2Main &&
              <div className="article-main-content"
                   id="article2-4">
                <div className="col s3 article-main-number">
                  01.
                </div>
                <div className="col s9 article-main-title">
                  <div>Reveal</div>
                  <p>Some text</p>
                </div>
              </div>
            }
            </div>
          </div>
        <Card className="article-grid-left col m6 l2 gradient-animation">
          <button onClick={this.props.handleFaq}
                  className='ryme-white-paper'
                  style={bgConfig.noRepeat('icons/paper.svg')}>
          </button>
          <div className="dot-left" id="14" />
        </Card>
      </section>
    );
  }
}
