import React from 'react'

import './index.scss'

class CustomSwitch extends React.Component{
  render(){
    return(
      <div className={`switch vertical-center ${this.props.isOn?`on`:``}`} onClick={this.props.onClick}> 
        <div className={`title vertical-center ${this.props.type !== ''?`sub-tiem`:``}`} >{this.props.isOn?this.props.onTitle:this.props.offTitle}</div>
        <div className={`gradient vertical-center ${this.props.isOn?`on`:``}`}>
          <div className={`circle vertical-center ${this.props.isOn?`on`:`off`}`}>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomSwitch;