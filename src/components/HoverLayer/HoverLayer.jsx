import React from 'react';
import './../../fonts.css';
import './HoverLayer.scss';

export default class HoverLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Handles background fading and back text
    var bgClass = "Hover-bg";
    var backTextClass = "Hover-backText";
    if(this.props.index === 1) {
      bgClass += "1 a";
      backTextClass += " back1";
    }
    else if(this.props.index === 2) {
      bgClass += "2 a";
      backTextClass += " back2";
    }
    else if(this.props.index === 3) {
      bgClass += "3 a";
      backTextClass += " back3";
    }
    //Handles second layer of backgrounds (so fading doesn't look awkward)
    else if(this.props.secondIndex === 1) bgClass += "1";
    else if(this.props.secondIndex === 2) bgClass += "2";
    else if(this.props.secondIndex === 3) bgClass += "3";

    //Handles image name and image styling
    let img;
    let img2;
    if(this.props.index == 1 || this.props.index == 2 || this.props.index == 3) img = require('./../../images/name-' + this.props.index + ".png");
    if(this.props.secondIndex == 1 || this.props.secondIndex == 2 || this.props.secondIndex == 3) img2 = require('./../../images/name-' + this.props.secondIndex + ".png");

    //Handles indexed non-named items
    let mainItems; //Items for top index
    let backgroundItems; //Items for secondary index
    if(this.props.index === 1) {
      mainItems =
        <div>
          <img className="Hover-line1" src={require('./../../images/programming/line1.png')} />
          <img className="Hover-line4" src={require('./../../images/programming/line4.png')} />
          <img className="Hover-line2" src={require('./../../images/programming/line2.png')} />
          <img className="Hover-line3" src={require('./../../images/programming/line3.png')} />
        </div>;
    } else if(this.props.index === 2) {
      mainItems =
        <div>
          <img className="Hover-design1" src={require('./../../images/design/mainfront.png')} />
          <img className="Hover-design2" src={require('./../../images/design/mainfrontline.png')} />
          <div className="Hover-design2-1"></div>
          <div className="Hover-design2-2"></div>
          <img className="Hover-design3" src={require('./../../images/design/mainisometric.png')} />
          <img className="Hover-design4" src={require('./../../images/design/mainx.png')} />
          <img className="Hover-design5" src={require('./../../images/design/mainy.png')} />
          <img className="Hover-design6" src={require('./../../images/design/mainz.png')} />
          <img className="Hover-design7" src={require('./../../images/design/mainlabel1.png')} />
          <img className="Hover-design8" src={require('./../../images/design/mainlabel2.png')} />
          <img className="Hover-design9" src={require('./../../images/design/mainlabel3.png')} />
          <img className="Hover-design10" src={require('./../../images/design/mainlabel4.png')} />
        </div>;
    } else if(this.props.index === 3) {
      mainItems =
        <div>

        </div>;
    }
    if(this.props.secondIndex === 1) {
      backgroundItems =
        <div>
          <img className="Hover-line1d" src={require('./../../images/programming/line1.png')} />
          <img className="Hover-line4d" src={require('./../../images/programming/line4.png')} />
          <img className="Hover-line2d" src={require('./../../images/programming/line2.png')} />
          <img className="Hover-line3d" src={require('./../../images/programming/line3.png')} />
        </div>;
    } else if(this.props.secondIndex === 2) {
      backgroundItems =
        <div>
          <img className="Hover-design1d" src={require('./../../images/design/mainfront.png')} />
          <img className="Hover-design2d" src={require('./../../images/design/mainfrontline.png')} />
          <div className="Hover-design2-1d"></div>
          <div className="Hover-design2-2d"></div>
          <img className="Hover-design3d" src={require('./../../images/design/mainisometric.png')} />
          <img className="Hover-design4d" src={require('./../../images/design/mainx.png')} />
          <img className="Hover-design5d" src={require('./../../images/design/mainy.png')} />
          <img className="Hover-design6d" src={require('./../../images/design/mainz.png')} />
          <img className="Hover-design7d" src={require('./../../images/design/mainlabel1.png')} />
          <img className="Hover-design8d" src={require('./../../images/design/mainlabel2.png')} />
          <img className="Hover-design9d" src={require('./../../images/design/mainlabel3.png')} />
          <img className="Hover-design10d" src={require('./../../images/design/mainlabel4.png')} />
        </div>;
    } else if(this.props.secondIndex === 3) {
      backgroundItems =
        <div>

        </div>;
    }

    //Handles 'click here!' text class
    var clickMe = "Hover-clickMe";
    if(this.props.index === 1) clickMe += " cm1";
    if(this.props.index === 2) clickMe += " cm2";
    if(this.props.index === 3) clickMe += " cm3";

    //Handles actual back text content
    let backText;
    if(this.props.index === 1) backText="Code";
    else if(this.props.index === 2) backText="Design";
    else if(this.props.index === 3) backText="Product";

    return (
      <div className={bgClass}>
        <h1 className={backTextClass}>{backText}</h1>
        <img className="Hover-basicLogo" src={img} />
        <img className="Hover-basicLogo2" src={img2} />

        <p className={clickMe}>Click me!<img src={this.props.index == 3 ? require('./../../images/arrow3.png') : require('./../../images/arrow2.png')} className="Hover-clickMeImg" /></p>

        {mainItems}
        {backgroundItems}

      </div>
    )
  }
}
