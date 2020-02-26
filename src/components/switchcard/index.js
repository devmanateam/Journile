import React from 'react';

import Switch from '../switch';
import Icon from '../../components/icon';
import './index.scss';

class SwitchCard extends React.Component{
  render(){
    return(
      <div className={`switch-card ${this.props.type !== ''?'sub-item':''}`}>
        <div className={`icon ${this.props.icon === ''?'empty':''}`}><Icon className="icon-gray vertical-center" size={30} name={this.props.icon}/></div>
        <div className={`text vertical-center ${this.props.icon === ''?'icon-empty':''}`}>{this.props.text}</div>
        <Switch isOn={this.props.isOn}  onClick={this.props.onClick} onTitle={this.props.onTitle} offTitle={this.props.offTitle} type={this.props.type}/>
      </div>
    )
  }
}

export default SwitchCard;