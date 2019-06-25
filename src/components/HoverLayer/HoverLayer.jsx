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
    let img = require('./../../images/name-1.png');
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

        </div>;
    } else if(this.props.index === 3) {
      mainItems =
        <div>

        </div>;
    }
    if(this.props.secondIndex === 1) {
      backgroundItems =
        <div>
          <img className="Hover-line1" src={require('./../../images/programming/line1.png')} />
          <img className="Hover-line4" src={require('./../../images/programming/line4.png')} />
          <img className="Hover-line2" src={require('./../../images/programming/line2.png')} />
          <img className="Hover-line3" src={require('./../../images/programming/line3.png')} />
        </div>;
    } else if(this.props.secondIndex === 2) {
      backgroundItems =
        <div>

        </div>;
    } else if(this.props.secondIndex === 3) {
      backgroundItems =
        <div>

        </div>;
    }

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

        {mainItems}
        {backgroundItems}

      </div>
    )
  }
}
