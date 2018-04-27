import React from "react";
import ReactBodymovin from "react-bodymovin";
import bgConfig from "../../ryme-helpers/ryme-background";

export default class LoadingPage extends React.Component {
  render() {
    return (
      <div className="loading-page-wrapper">
        <div className="loading-page-logo rotating large"
             style={{backgroundImage:"url(./public/content/images/articles/loadingPage/logo1.svg"}}></div>
        <div className="loading-page-logo rotating-reverse small"
             style={{backgroundImage:"url(./public/content/images/articles/loadingPage/logo1.svg"}}></div>
      </div>
    );
  }
}
