import React from "react";
import TextField from 'material-ui/TextField';
import FloatingActionButton from "material-ui/FloatingActionButton";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer row col s12"
               style={{ height: "800px", width: "100%", bottom: "-3480px", position: "absolute", backgroundImage: "url(./public/content/images/articles/footer/footer.svg)"}}>
        <FloatingActionButton backgroundColor="white" style={{position:"absolute", right: "48%", top: "41%"}}/>
        <article className="col s12" style= {{position: "absolute", bottom: "0", height: "200px", width:"100%"}}>
          <div className="col s1"></div>
          <div className="col s10" style= {{display: "flex", justifyContent: "column"}}>
            <div className="" style= {{paddingRight: "50px", width: "23%",}}>
              <div style= {{backgroundColor: "white", height: "200px"}}>
              SOME BIEUTIFUL ANIM
              </div>
            </div>
            <div className="" style= {{paddingRight: "50px", width: "53%",}}>
              <div style= {{backgroundColor: "white", height: "200px"}}>
              EMAIL
              </div>
            </div>
            <div className="" style= {{width: "23%"}}>
              <div style= {{backgroundColor: "white", height: "200px"}}>
                VOTE FOR OUR ROADMAP pulse.red
                SOCIAL MEDIA
              </div>
            </div>
          </div>
          <div className="col s1"></div>
        </article>
      </section>
    );
  }
}
