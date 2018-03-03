import React from "react";
import Drawer from 'material-ui/Drawer';
import {Tabs, Tab} from 'material-ui/Tabs';


export default class DrawerProfile extends React.Component {
  render() {
    return (
      <Drawer style={{paddingRight: "300px"}}
              width={1190} openSecondary={true}
              zDepth={0} open={this.props.open}
              containerStyle={{zIndex: "-1"}}>
        <Tabs  style={{marginTop: "70px", paddingRight: "250px"}}>
           <Tab label="RECENTS" />
           <Tab label="FAVORITES" />
           <Tab label="NEARBY" />
        </Tabs>
      </Drawer>
    )
  }
}
