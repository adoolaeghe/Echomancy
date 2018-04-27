import React from "react";
import Drawer from "material-ui/Drawer";
import Avatar from 'material-ui/Avatar';
import {Pie} from 'react-chartjs-2';
import Chip from 'material-ui/Chip';
const data = {
  datasets: [{
    data: [
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
    ],
    backgroundColor: [
      '#FF6384',
      '#47C990',
      '#290A6C',
      '#E1B572',
      '#85A425',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue'
    ],
    label: 'My dataset' // for legend
  }]
}

export default class Article7Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardShadow: 1
    };
  }

  render() {

    return (
      <Drawer
        width={(document.documentElement.clientWidth)*0.439}
        docked={false}
        openSecondary={false}
        zDepth={1}
        open={!this.props.display}
        containerStyle={{
          zIndex: "1401",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:"url(./public/content/images/main/text-50.svg)",
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1401"
        }}
        overlayStyle={{opacity: "0.2"}}
      >
        <Pie data={data} />
        <div style={{height: "100vh",zIndex: "200", borderLeft: "1px solid lightGrey", position: "absolute", left: "49.95%"}}></div>
        <div style={{position: "absolute", top: "10%"}}>50 50</div>
        <div style={{position: "absolute", textAlign: 'center', width: "50%", bottom: "10%", left: '0'}}>
          <Chip style={{marginLeft: "25%"}}>
            <Avatar src="./public/content/images/main/avatar.jpg" />
            Bob 1.3
          </Chip>
        </div>
        <div style={{position: "absolute", bottom: "10%", right: '20%'}}>3*3</div>
      </Drawer>
    );
  }
}
