import React from "react";
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import SearchBar from 'material-ui-search-bar';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar style={{position: "fixed", zIndex: "1000000", backgroundColor: "white"}}
              onRightIconButtonClick={() => {this.props.handleToggleRight()}}
              iconElementRight={<Avatar>A</Avatar>}
              iconElementLeft={<Avatar>A</Avatar>}>
        <SearchBar onChange={() => console.log('onChange')}
                   onRequestSearch={() => console.log('onRequestSearch')}
                   style={{
                      position: "absolute",
                      top: "7px",
                      left: "5%",
                      maxWidth: 800
                   }}
        />
      </AppBar>
    )
  }
}
