import React from 'react';
import logo from './logo.svg';
import './fonts.css';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverIndex: 0,
      showAboutIndex: false,
    }
  }

  setHoverIndex(index) {
    this.setState({
      hoverIndex: index,
    })
  }

  setAboutIndex(index) {
    this.setState({
      showAboutIndex: index,
    })
  }

  render() {

    return (
      <div className="App">
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
          <a className="App-link first">About</a>
          <a className="App-link mid">Resume</a>
          <a className="App-link last">Contact</a>
        </u></div>
        <div className="App-basicBackground">
          <img src={require('./images/name-basic.png')} alt="ERROR: Please reload." className="App-basicLogo" />
        </div>

        <p className={this.state.hoverIndex == 0 ? "App-hoverHere" : "App-hoverHere none"}>Hover over me!<img src={require('./images/arrow.png')} className="App-hoverHereImg" /></p>

        <div className="App-bottomLinks">
          <a className={this.state.hoverIndex == 1 ? "App-hoverLink first hover" : "App-hoverLink first"} onMouseEnter={this.setHoverIndex.bind(this, 1)}>Programming</a>
          <a className={this.state.hoverIndex == 2 ? "App-hoverLink mid hover" : "App-hoverLink mid"} onMouseEnter={this.setHoverIndex.bind(this, 2)}>Design</a>
          <a className={this.state.hoverIndex == 3 ? "App-hoverLink last hover" : "App-hoverLink last"} onMouseEnter={this.setHoverIndex.bind(this, 3)}>Entrepreneurship</a>
        </div>
        <div className="App-bottomLinksOverlay">
          <a className={this.state.hoverIndex == 1 ? "App-hoverLinkOverlay first hover" : "App-hoverLinkOverlay first"}>Programming</a>
          <a className={this.state.hoverIndex == 2 ? "App-hoverLinkOverlay mid hover" : "App-hoverLinkOverlay mid"}>Design</a>
          <a className={this.state.hoverIndex == 3 ? "App-hoverLinkOverlay last hover" : "App-hoverLinkOverlay last"}>Entrepreneurship</a>
        </div>
      </div>
    );
  }
}
