import React from "react";
import FlatButton from "material-ui/FlatButton";
import Graph from "../graph/homeGraph";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

export default class Arcticle8 extends React.Component {
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
      expanded: false
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
          containerStyle={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"
          }}
        >
          <div className="row"
            style={{
              backgroundColor:"white",
              fontSize: "88px",
              fontWeight: "bolder",
            }}>
            <div className="col s5">
              SECTION
            </div>
            <div className="col s7"
                style={{
                  height: "250px",
                  backgroundImage:
                    "url(./public/content/images/main/hash-background.svg)"
                }}>
                <FlatButton label="Expand" onClick={this.handleExpand} />
                <FlatButton label="Reduce" onClick={this.handleReduce} />
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
