import React from 'react'

import './index.scss'

class LanguageCard extends React.Component{

  render(){
    return(
      <div className="language-card" data-language-name={this.props.name}>
        {this.props.name}
      </div>
    )
  }
}

export default LanguageCard;