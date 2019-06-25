import React from 'react';
import './../../fonts.css';
import './HoverLayer.scss';

export default class HoverLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var bgClass = "Hover-bg";
    if(this.props.index == 1) bgClass += "1 a";
    else if(this.props.index == 2) bgClass += "2 a";
    else if(this.props.index == 3) bgClass += "3 a";
    else if(this.props.secondIndex == 1) bgClass += "1";
    else if(this.props.secondIndex == 2) bgClass += "2";
    else if(this.props.secondIndex == 3) bgClass += "3";

    let backText;
    if(this.props.index == 1) backText="Code";
    else if(this.props.index == 2) backText="Design";
    else if(this.props.index == 3) backText="Product";

    return (
      <div className={bgClass}>
        <h1 className="Hover-backText">{backText}</h1>
      </div>
    )
  }
}
