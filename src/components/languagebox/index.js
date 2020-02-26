import React from 'react'
import $ from 'jquery'; 

import Icon from '../icon'
import LanguageCard from '../languagecard'
import './index.scss'

const LanguageArray = [
  {
      "id": "1",
      "name": "Afghanistan",
      "country_code": "AF",
      "dial_code": 93
  },
  {
      "id": "2",
      "name": "Aland Islands",
      "country_code": "AX",
      "dial_code": 358
  },
  {
      "id": "3",
      "name": "Albania",
      "country_code": "AL",
      "dial_code": 355
  },
  {
      "id": "4",
      "name": "Algeria",
      "country_code": "DZ",
      "dial_code": 213
  },
  {
      "id": "5",
      "name": "American Samoa",
      "country_code": "AS",
      "dial_code": 1
  },
  {
      "id": "6",
      "name": "Andorra",
      "country_code": "AD",
      "dial_code": 376
  },
  {
      "id": "7",
      "name": "Angola",
      "country_code": "AO",
      "dial_code": 244
  },
  {
      "id": "8",
      "name": "Anguilla",
      "country_code": "AI",
      "dial_code": 1
  },
  {
      "id": "9",
      "name": "Antarctica",
      "country_code": "AQ",
      "dial_code": 672
  },
  {
      "id": "10",
      "name": "Antigua",
      "country_code": "AG",
      "dial_code": 1
  }
]

class LanguageBox extends React.Component{

  componentDidMount() {
    $('#language-search').on('input', function(){
      var searchText = this.value
      var i = 0;
      $('.language-card').map(function(){
        var str = $(this).attr("data-language-name")
        if(str.toLowerCase().indexOf(searchText) < 0){
          $(this).hide()
        }
        else{
          $(this).show()
        }
      })
    });
  }
  getCountryArray(){
      return LanguageArray.map((country) => (
        <LanguageCard key={country.id}  name={country.name}/>
      ))
  }

  render(){
    return(
      <div className="language-box">
        <div className="search">
            <div className="content">
              <Icon name="search" className="icon-gray" size={30} />
              <input type="text" id="language-search" className="search-title setting" placeholder="Search Language..."/>
            </div>
          </div>
        <div className="list">
          {this.getCountryArray()}
        </div>
      </div>
    )
  }
}

export default LanguageBox;