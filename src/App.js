import React from 'react';
import './fonts.css';
import './App.scss';
import AboutLayer from './components/AboutLayer/AboutLayer';
import HoverLayer from './components/HoverLayer/HoverLayer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverIndex: 0,
      secondIndex: 0,
      aboutIndex: 0,
    }
  }

  setHoverIndex(index) {
    this.setState({
      secondIndex: this.state.hoverIndex,
      hoverIndex: index,
    })
  }

  closeAbout() {
    this.setState({
      aboutIndex: 0,
    })
  }

  openAbout() {
    this.setState({
      aboutIndex: 1,
    })
  }

  openContact() {
    this.setState({
      aboutIndex: 2,
    })
  }

  render() {
    //Handles top & bottom link classes
    var first = "App-hoverLink first";
    var mid = "App-hoverLink mid";
    var last = "App-hoverLink last";
    var firstOverlay = "App-hoverLinkOverlay first";
    var midOverlay = "App-hoverLinkOverlay mid";
    var lastOverlay = "App-hoverLinkOverlay last";
    var topFirst = "App-link first";
    var topMid = "App-link mid";
    var topLast = "App-link last";
    if(this.state.hoverIndex == 1) {
      first += " hover1";
      mid += " passive1";
      last += " passive1";
      firstOverlay += " hover1";
      midOverlay += " passive1";
      lastOverlay += " passive1";
      topFirst += " top1";
      topMid += " top1";
      topLast += " top1";
    } else if(this.state.hoverIndex == 2) {
      first += " passive2";
      mid += " hover2";
      last += " passive2";
      firstOverlay += " passive2";
      midOverlay += " hover2";
      lastOverlay += " passive2";
      topFirst += " top2";
      topMid += " top2";
      topLast += " top2";
    } else if(this.state.hoverIndex == 3) {
      first += " passive3";
      mid += " passive3";
      last += " hover3";
      firstOverlay += " passive3";
      midOverlay += " passive3";
      lastOverlay += " hover3";
      topFirst += " top3";
      topMid += " top3";
      topLast += " top3";
    }


    return (
      <div className="App">
        <AboutLayer
          aboutIndex={this.state.aboutIndex}
          closeAbout={this.closeAbout.bind(this)}
          />
          {
            this.state.secondIndex == 0 ? <div></div>
            :
            <HoverLayer
              secondIndex={this.state.secondIndex}
              />
          }
        {
          this.state.hoverIndex == 0 ? <div></div>
          :
          <HoverLayer
            index={this.state.hoverIndex}
            />
        }

        <div className="App-basicLine1"></div>
        <div className="App-basicLine2"></div>
        <div className="App-basicLine3"></div>
        <div className="App-basicLine4"></div>
        <div className="App-basicLine5"></div>
        <div className="App-basicLine6"></div>
        <div className="App-basicLine7"></div>
        <div className="App-basicLine8"></div>
        <div className="App-basicLine9"></div>

        <div className="App-topLinks"><u>
          <a className={topFirst} onClick={this.openAbout.bind(this)}>About</a>
          <a className={topMid} href="resume.pdf">Resume</a>
          <a className={topLast} onClick={this.openContact.bind(this)}>Contact</a>
        </u></div>
        <div className="App-basicBackground">
          <img src={require('./images/name-basic.png')} alt="ERROR: Please reload." className="App-basicLogo" />
        </div>

        <p className={this.state.hoverIndex == 0 ? "App-hoverHere" : "App-hoverHere none"}>Hover over me!<img src={require('./images/arrow.png')} className="App-hoverHereImg" /></p>

        <div className="App-bottomLinks">
          <a className={first} onMouseEnter={this.setHoverIndex.bind(this, 1)}>Programming</a>
          <a className={mid} onMouseEnter={this.setHoverIndex.bind(this, 2)}>Design</a>
          <a className={last} onMouseEnter={this.setHoverIndex.bind(this, 3)}>Entrepreneurship</a>
        </div>
        <div className="App-bottomLinksOverlay">
          <a className={firstOverlay}>Programming</a>
          <a className={midOverlay}>Design</a>
          <a className={lastOverlay}>Entrepreneurship</a>
        </div>
      </div>
    );
  }
}
