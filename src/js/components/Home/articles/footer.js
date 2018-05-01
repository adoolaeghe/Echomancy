import React from "react";
import TextField from 'material-ui/TextField';
import FloatingActionButton from "material-ui/FloatingActionButton";
import Clock from 'react-clock';

export default class Footer extends React.Component {

  constructor() {
    super();
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <section className="footer row col s12"
               style={{ height: "800px", width: "100%", bottom: "-3280px", position: "absolute", backgroundImage: "url(./public/content/images/articles/footer/footer.svg)"}}>
        <div className="white btn-large white btn-floating" onClick={() => {window.scroll({top: 0,behavior: "smooth"})}} style={{position:"absolute", right: "48%", top: "41%", backgroundImage: "url(./public/content/images/main/chevron-up.svg)", backgroundSize: "60%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}/>
        <article className="col s12" style= {{position: "absolute", bottom: "0", height: "250px", width:"100%"}}>
          <div className="col s1"></div>
          <div className="col s10" style= {{display: "flex", justifyContent: "column"}}>
            <div style= {{paddingRight: "50px", width: "33%",}}>
              <div className="footer-article" style= {{backgroundColor: "white", height: "250px", display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "center"}}>
                <Clock value={this.state.date} />
                <div>Paris</div>
              </div>
            </div>
            <div className="" style= {{width: "78%", borderTopLeftRadius: "20px"}}>
              <div className="row footer-article" style={{backgroundColor: "white", height: "250px", position: "relative"}}>
                <button className="btn" style={{color: "white", position: "absolute", right: "8%", top: "45px"}}>Hear More</button>
                <div className="input-field col s10 push-s1">
                  <input style={{marginTop: "20px"}} id="email" placeholder="Please Enter Your Email" type="email" className="validate"></input>
                </div>
                <div className="input-field row col s10 push-s1">
                  <div className="col s4">VOTE now</div>
                  <div className="col s8" style={{display: "flex", justifyContent: "space-evenly"}}>
                    <a className="btn-floating white"
                    style={{
                      background:
                        "url(./public/content/images/icons/paper.svg) no-repeat",
                      backgroundSize: "50%",
                      backgroundPosition: "center"
                    }}>
                    </a>
                    <a className="btn-floating white"
                    style={{
                      background:
                        "url(./public/content/images/icons/alerts.svg) no-repeat",
                      backgroundSize: "50%",
                      backgroundPosition: "center"
                    }}>
                    </a>
                    <a className="btn-floating white"
                      style={{
                        background:
                          "url(./public/content/images/icons/faq.svg) no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center"
                      }}>
                    </a>
                    <a className="btn-floating white"
                      style={{
                        background:
                          "url(./public/content/images/icons/faq.svg) no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center"
                      }}>
                    </a>
                    <a className="btn-floating white"
                      style={{
                        background:
                          "url(./public/content/images/icons/faq.svg) no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center"
                      }}>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s1"></div>
        </article>
      </section>
    );
  }
}
