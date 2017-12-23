import React from "react";

export default class addSlice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleChangeAddButton() {
    this.props.addSlice(generateRgb(this.state.color), 0.5)
  }

  render() {
    const background = 'linear-gradient('+this.state.color.muted+', '+this.state.color.lightMuted+')'
    return(
      <button className='add'
              style={{background: background}}
              onClick={this.handleChangeAddButton.bind(this)}>
        Add
      </button>
    )
  }
}
