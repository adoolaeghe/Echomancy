import React from "react";
import Drawer from "material-ui/Drawer";
import Card from "material-ui/Card";

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import {List, ListItem} from 'material-ui/List';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
    return (
      <Drawer
        width={350}
        docked={false}
        openSecondary={false}
        zDepth={5}
        open={this.props.faqDisplay}
        containerStyle={{
          zIndex: "100000000",
          backgroundColor: "white",
        }}
        onRequestChange={(open) => this.setState({open})}
        style={{
          zIndex: "100000000"
        }}
        overlayStyle={{opacity: "0.1"}}
      >
      <List>
          <div onClick={()=>{this.props.handleFaq()}}>
            Cancel
          </div>
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={"heello"}
          />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={"heello"}
          />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={"heello"}
          />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={"heello"}
          />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={"heello"}
          />
        </List>
      </Drawer>
    );
  }
}
