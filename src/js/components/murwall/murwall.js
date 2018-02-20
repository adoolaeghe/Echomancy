import React from "react";
import Player from "./components/player";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from 'material-ui-search-bar';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {Step,Stepper,StepLabel} from 'material-ui/Stepper';

export default class MurWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on : null,
      open: false,
      open1: false,
      open2: false
    }
  }

  handleToggleRight() {
    this.setState({open: !this.state.open});
  }

  handleToggleLeft() {
    this.setState({open1: !this.state.open1});
  }

  handleToggleLeft1() {
    this.setState({open2: !this.state.open2});
  }

  handleOnOff(playerKey) {
    this.setState({
      on : playerKey
    })
  }

  handlePlayerRender() {
    let to_return = [];
    for(let i = 0; i < this.props.players; i++) {
      to_return.push(
        <Player key={i}
                uKey={i}
                onKey={this.state.on}
                handleOnOff={this.handleOnOff.bind(this)}
        />
      )
    }
    return to_return;
  }

  render() {
    return(
      <div className="row">
        <AppBar
          style={{position: "fixed", zIndex: "1000000", backgroundColor: "white"}}
          onRightIconButtonClick={() => {this.handleToggleRight()}}
          iconElementRight={<Avatar>A</Avatar>}
          iconElementLeft={<Avatar>A</Avatar>}>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              position: "absolute",
              top: "7px",
              left: "5%",
              maxWidth: 800
            }}/>
        </AppBar>

        <div className="left-column col m2 s2">
          <Drawer width={240} openSecondary={false} zDepth={15} open={true} style={{zIndex: "100000"}}>
            <div className="col s12" style={{height: "50px", marginTop: "97px", borderBottom:"1px solid grey", borderTop:"1px solid grey"}}>Explain me</div>
          </Drawer>
          <Drawer width={240} openSecondary={true} zDepth={15} open={this.state.open} style={{zIndex: "100000"}}>
            <div className="col s12" style={{height: "50px", marginTop: "97px", borderBottom:"1px solid grey", borderTop:"1px solid grey"}}>My account</div>
            <div className="col s12" style={{height: "357px", borderBottom:"1px solid grey"}}>My Murs</div>
            <div className="col s12" style={{height: "48px", borderBottom:"1px solid grey"}}>Buy Murs</div>
            <div className="col s12" style={{height: "48px", borderBottom:"1px solid grey"}}>My Murs</div>
          </Drawer>
          <Drawer style={{paddingRight: "300px"}}
                  width={1190} openSecondary={true}
                  zDepth={0} open={this.state.open2}
                  containerStyle={{zIndex: "-1"}}>
            <Tabs  style={{marginTop: "70px", paddingRight: "250px"}}>
               <Tab label="RECENTS" />
               <Tab label="FAVORITES" />
               <Tab label="NEARBY" />
            </Tabs>
          </Drawer>
        </div>

        <main className="col l8 m8 s8" style={{marginTop: "70px"}}>
          <div className="col s12 row">
            <FlatButton className="col s4" label="Primary" primary={true} />
            <FlatButton className="col s4" label="Secondary" secondary={true} />
            <FlatButton className="col s4" label="Secondary" secondary={true} />
          </div>
          {this.handlePlayerRender()}
        </main>
        <div className="col l2 m2 s2 side-right">

        </div>

      </div>
    )
  }
}
