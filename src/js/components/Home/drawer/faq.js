import React from "react";
import Drawer from "material-ui/Drawer";
import Card from "material-ui/Card";

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import {List, ListItem} from 'material-ui/List';

export default class Faq extends React.Component {

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
        style={{
          zIndex: "100000000"
        }}
        overlayStyle={{display: "none"}}
      >
      <List>
          <div onClick={()=>{this.props.handleFaq()}}>
            Cancel
          </div>
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Starred"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                primaryText="Sent Mail"
                leftIcon={<ContentSend />}
                disabled={true}
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                ]}
              />,
              <ListItem
                key={3}
                primaryText="Inbox"
                leftIcon={<ContentInbox />}
                open={this.props.open}
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                ]}
              />,
            ]}
          />
        </List>
      </Drawer>
    );
  }
}
