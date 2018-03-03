import React from "react";
import FlatButton from 'material-ui/FlatButton';

export default class TopFilters extends React.Component {
  render() {
    return (
      <div>
        <FlatButton className="col s4" label="Primary" primary={true} />
        <FlatButton className="col s4" label="Secondary" secondary={true} />
        <FlatButton className="col s4" label="Secondary" secondary={true} />
      </div>
    )
  }
}
