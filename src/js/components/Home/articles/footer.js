import React from "react";
import TextField from 'material-ui/TextField';
import FloatingActionButton from "material-ui/FloatingActionButton";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer row col s12"
               style={{ height: "800px", width: "100%", bottom: "-3480px", position: "absolute", backgroundImage: "url(./public/content/images/articles/footer/footer.svg)"}}>
        <FloatingActionButton backgroundColor="white" style={{position:"absolute", right: "48%", top: "41%"}}/>
        <div style={{backgroundImage: "url(./public/content/images/articles/footer/WIP.svg)", position: "absolute", backgroundRepeat: "no-repeat", bottom: "0", right: "100px", width: "300px", backgroundSize: "contain", height: "300px"}}></div>
        <div className="row col s12" style={{height: "200px", marginTop: "440px" }}>
          <div className='col s1'></div>
          <div className='col s4' style={{height: "100px"}}>
            <div className='col s12'>
              <TextField
              fullWidth = {true}
              hintText="Styled Hint Text"
              />
            </div>
            <div className='col s12'>
            <a className="btn-floating white"
            style={{
              margin: "20px",
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a><a className="btn-floating white"
            style={{
              margin: "20px",
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a>
            <a className="btn-floating white"
            style={{
              margin: "20px",
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a>
            <a className="btn-floating white"
            style={{
              margin: "20px",
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a>
            <a className="btn-floating white"
            style={{
              margin: "20px",
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
