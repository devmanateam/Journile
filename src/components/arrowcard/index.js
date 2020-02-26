import React from 'react';

import Icon from '../icon';
import './index.scss';

class ArrowCard extends React.Component{
  render(){
    return(
      <div className={`arrow-card ${this.props.isEdit?`active`:``}`} onClick={this.selected}>
        <div className="card-gradient" style={{display: this.props.isEdit?'':'none'}}>
        </div>
        <div className="content vertical-center">
          <Icon className={`icon-gray ${this.props.isEdit?`active`:``}`} size={30} name={this.props.icon}/>
          <span className={`text ${this.props.isEdit?`active`:``}`} >{this.props.text}</span>
          <Icon className={`icon-gray arrow-icon ${this.props.isEdit?`active`:``}`} size={24} name={this.props.isEdit?"arrow_left":"arrow_right"}/>
        </div>
      </div>
    )
  }
}

export default ArrowCard;