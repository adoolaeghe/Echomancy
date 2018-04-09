import React from "react";

export default class LoadingPage extends React.Component {
  render() {
    return (
      <div
        className= "loadingPage"
        style={{
          backgroundImage: "url(./public/content/images/main/logo.svg)"
        }}
      />
    );
  }
}
