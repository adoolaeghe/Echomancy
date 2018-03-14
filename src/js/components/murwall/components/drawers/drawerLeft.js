import React from "react";
import Drawer from "material-ui/Drawer";
import { Tabs, Tab } from "material-ui/Tabs";

export default class DrawerLeft extends React.Component {
  render() {
    return (
      <Drawer
        width={240}
        openSecondary={false}
        zDepth={15}
        open={true}
        style={{ zIndex: "100000" }}
      >
        <div
          className="col s12"
          style={{
            height: "50px",
            marginTop: "97px",
            borderBottom: "1px solid grey",
            borderTop: "1px solid grey"
          }}
        >
          Explain me
        </div>
      </Drawer>
    );
  }
}
