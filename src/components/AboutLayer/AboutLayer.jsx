import React from 'react';
import './../../fonts.css';
import './AboutLayer.scss';

export default class AboutLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgState: 0,
    }
  }

  resetBgState() {
    this.setState({
      bgState: 0,
    })
  }

  closeBg() {
    this.setState({
      bgState: 1,
    })

    setTimeout(() => {
      this.setState({
        bgState: 2,
      })
    }, 1000)
  }

  render() {
    var bgClass = "About-bg ";
    if(this.props.aboutIndex == 0) {
      bgClass += "destroy";
    } else if(this.state.bgState == 1) {
      bgClass += "close";
    } else if(this.state.bgState == 2) {
      this.props.closeAbout();
      this.resetBgState();
    }

    return (
      <div className={bgClass}>
        <div className="About-basicLine1"></div>
        <div className="About-basicLine2"></div>
        <div className="About-basicLine3"></div>
        <div className="About-basicLine4"></div>

        {
          this.props.aboutIndex == 1 ? <h1 className="About-title">Who am I?</h1> : <div></div>
        }
        {
          this.props.aboutIndex == 2 ? <h1 className="About-title">Let's get in touch!</h1> : <div></div>
        }
        {
          this.props.aboutIndex == 1 ? <img src="" className="About-img" /> : <div></div>
        }
        <p className="About-x" onClick={this.closeBg.bind(this)}>X</p>
      </div>
    )
  }
}
