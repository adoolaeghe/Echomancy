import React from "react";
import Drawer from 'material-ui/Drawer';

export default class DrawerRight extends React.Component {
  render() {
    return (
      <Drawer className="drawerRight" openSecondary={true} zDepth={9} open={this.props.open} style={{zIndex: "100000"}}>
        <div className="col s12" style={{height: "50px", marginTop: "97px", borderBottom:"1px solid grey", borderTop:"1px solid grey"}}>My account</div>
        <div className="col s12" style={{height: "357px", borderBottom:"1px solid grey"}}>
          My Murs
        </div>
        <div className="col s12" style={{height: "48px", borderBottom:"1px solid grey"}}>Buy Murs</div>
        <div className="col s12" style={{height: "48px", borderBottom:"1px solid grey"}}>My Murs</div>
      </Drawer>
    )
  }
}
