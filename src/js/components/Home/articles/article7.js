import React from "react";
import FlatButton from "material-ui/FlatButton";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Graph from "../graph/homeGraph";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

export default class Arcticle7 extends React.Component {
  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  dummyAsync = cb => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  constructor() {
    super();
    this.state = {
      expanded: false,
      shadow: 1
    }
  }
  render() {
    return (
      <section
        className="article8 row"
      >
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
          onMouseOver = {() => this.setState({ cardShadow: 2 })}
          onMouseOut = {() => this.setState({ cardShadow: 1 })}
          zDepth={this.state.cardShadow}
          containerStyle={{

          }}
        >
        <div
          className="card-header row"
          href="#!"
          style={{
            backgroundColor: "white",
            fontSize: "88px",
            fontWeight: "bolder"
          }}
        >
        <div
          className="col s2"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            height: "250px",
            backgroundColor: "white",
            backgroundImage:
              "url(./public/content/images/main/hash-background-reverse.svg)"
          }}
        >
          <div
            className="article5-demo-trigger btn-large white btn-floating">
            <i style={{
              backgroundImage:"url(./public/content/images/main/logo-secondary.svg)",
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "60px"
            }}></i>
          </div>
        </div>
          <div
            id="article5main"
            className="col s5"
            style={{
              textAlign: "Left",
              height: "250px",
              position: "relative",
              backgroundColor: "white"
            }}
          >
          <div className="article6-number" style={{position: "absolute",left:"-20px"}}>
           04.
          </div>
            <div
              style={{
                position: "absolute",
                borderLeft: "1px solid #8188E7",
                paddingLeft: "20px",
                width: "400Px",
                left: "0px",
                height: "100%",
                textAlign: "left"
              }}
            >
              <div
                style={{
                  left: "5%",
                  position: "absolute",
                  height: "5px",
                  width: "70px",
                  backgroundColor: "#8188E7",
                  marginBottom: "20px"
                }}
              />
              <div style={{}} />
              <h2>SECTION</h2>
              <p
                style={{
                  backgroundColor: "white",
                  fontSize: "1.25rem",
                  fontWeight: "lighter"
                }}
              >
                Eco is a global currency not controlled by any single
                individual, organization, or nation. Our mission is to
                distribute the majority of
              </p>
            </div>
          </div>

          <div
            className="col s5"
            id="article5left"
            style={{
              height: "250px",
              backgroundImage:
                "url(./public/content/images/main/hash-background.svg)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              id="container"
              style={{
                width: "250px",
                top: "15px",
                height: "250px",
                left: "0%",
                position: "absolute"
              }}
            />
          </div>
        </div>
          <CardText expandable={true}>
          <div className="article8-main">
            <div className="article8-main-header">A NEW REGIME</div>
            <div className="article8-main-subheader">
              ALL PROFIT ARE DIVIDED 50/50 BETWEEN
            </div>
            <div className="article8-main-content">
              The content is segmented in parts that becomes symbolic shares of
              the content itself. Each time someone buy a share it reveals
              multiple new shares, therefore new parts of the content. The content
              is revealed progressively to its popularity. The price of shares is
              directly correlated to its number available : the more
              shares/content information are visible the more the share-price
              rise.
            </div>
            <div
              className="article8-bottom-info"
              style={{
                backgroundImage:
                "url(./public/content/images/articles/article8-bottom-landscape.svg)"
              }}
            />
          </div>
          </CardText>
        </Card>
      </section>
    );
  }
}
