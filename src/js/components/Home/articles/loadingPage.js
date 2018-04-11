import React from "react";
import ReactBodymovin from "react-bodymovin";
import menuAnimDataA from "../../../../../public/content/animation/loadingAnimData.json";

export default class LoadingPage extends React.Component {
  render() {
    const menuAnimOptionA = {
      loop: true,
      autoplay: true,
      prerender: false,
      animationData: menuAnimDataA
    };
    return (
      <div className="loading-page-wrapper">
        <ReactBodymovin className="loadingPage" style={{width: "70px"}} key={1} options={menuAnimOptionA} />
      </div>
    );
  }
}
