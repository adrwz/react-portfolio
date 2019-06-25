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
    if(this.props.aboutIndex === 0) {
      bgClass += "destroy";
    } else if(this.state.bgState === 1) {
      bgClass += "close";
    } else if(this.state.bgState === 2) {
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
          this.props.aboutIndex === 1 ? <h1 className="About-title">Who am I?</h1> : <div></div>
        }
        {
          this.props.aboutIndex === 2 ? <h1 className="About-title">Let's get in touch!</h1> : <div></div>
        }
        {
          this.props.aboutIndex === 1 ?
          <p className="About-p">
            I am an incoming second year student at UCLA passionate about front-end development, design, and entrepreneurship. Since my start my Freshman year in high school, I've realized I wanted to make an impact on others&apos; lives; having this trio of skills will assist me in doing just that.
            <br/><br/>
            As I improved my code ability, I spent more time developing other essential skills, from speaking to business and marketing to art and design. Using every one of these skills, I've put together various different projects, each of which represent my ability in each relevant area. Please do not hesitate to click around and view the many projects I have laying around this website.
            <br/><br/>
            Thank you, and I hope we can connect in the future!
            <br/>
            -Andrew Zhou
          </p>
          :
          <div></div>
        }
        {
          this.props.aboutIndex == 2 ?
          <p className="About-p contact">
            <b>Email me</b>: <a target="_blank" className="About-link" href="mailto:andrewzhou@g.ucla.edu"><u>andrewzhou@g.ucla.edu</u></a><br/>
            <b>LinkedIn</b>: <a target="_blank" className="About-link" href="https://linkedin.com/in/andrew-zh"><u>https:&#47;&#47;linkedin.com/in/andrew-zh</u></a>
          </p>
          :
          <div></div>
        }
        {
          this.props.aboutIndex == 1 ? <img src={require('./../../images/me.jpeg')} className="About-img" /> : <div></div>
        }
        <p className="About-x" onClick={this.closeBg.bind(this)}>X</p>
      </div>
    )
  }
}
