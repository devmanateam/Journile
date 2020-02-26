import React from 'react';
import $ from 'jquery'; 

import LanguageBox from '../../components/languagebox';
import ArrowCard from '../../components/arrowcard';
import SwitchCard from '../../components/switchcard';
import CustomSwitch from '../../components/switch';
import Icon from '../../components/icon';
import './index.scss';

const SettingItemName = {
  search: 'Search settings',
  upgrade: 'Upgrade to CertifiedPro',
  money: 'My Money',
  photo: 'Photo Tagging',
  personalization: 'Personalization & Data',
  language: 'Select Language',
  contacts: 'Contacts',
  account: 'Block Accounts',
  monetise: 'Monetise your Content',
  emailAddress: 'Let Others Find Me by Email Address',
  phone: 'Let Others Find me by Phone Number',
  certifiedPro: 'Display Content From Certifiedpro Users Only',
  filter: 'Family Safe Filter',
  theme: 'Theme'
}

const SettingSubItemName = {
  widthDraw: 'Widthdraw Method',
  accountBalance: 'Account Balance',
  readerTag: 'Let Readers Tag You in Photos',
  everyTag: 'Let Everyone Tag You in Photos',
  personData: 'Personaliszation and Data',
  personSubDes: 'This will enable or disable all personalisation and data settings',
  personAds: 'Personalized Ads',
  personDevice: 'Personalize Based On Your Device',
  personPlace: "Personalize Based On Places you 've been",
  track: 'Track Where You See Journile Content From Accross the Web',
  share: "Share Your Data With Journile 's Business Partners",
  syncContact: 'Sync Contacts With Journile',
  inviteContact: 'Invite Contacts To Join Journile'
}

class Settings extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isSelectedUpgrade: false,
      isSelectedMoney: false,
      isSelectedPhoto: false, 
      isSelectedPersonalization: false,
      isSelectedLanguage: false,
      isSelectedContact: false,
      isSelectedAccount: false,
      isOnMonetise: false,
      isOnEmailAddress: false,
      isOnPhone: false,
      isOnCertifiedPro: false,
      isOnFilter: false,
      isDark: true
    }
  } 

  componentDidMount() {
    $('#search').on('input', function(){
      var searchText = this.value
      var i = 0;
      $('.items .item').map(function(){
        var str = $(this).attr("data-text")
        if(str.toLowerCase().indexOf(searchText) < 0){
          $(this).hide()
        }
        else{
          $(this).show()
        }
      })
    });
  }

  editState($key){
    this.setState({
      isSelectedUpgrade: false,
      isSelectedMoney: false,
      isSelectedPhoto: false, 
      isSelectedPersonalization: false,
      isSelectedLanguage: false,
      isSelectedContact: false,
      isSelectedAccount: false
    })

    this.setState({
      [$key]: true
    })
  }

  selectedUpgrade = ()=>{ this.editState("isSelectedUpgrade")}
  selectedMoney = ()=>{this.editState("isSelectedMoney")}
  selectedPhoto = ()=>{this.editState("isSelectedPhoto")}
  selectedPersonalization = ()=>{this.editState("isSelectedPersonalization")}
  selectedLanguage = ()=>{this.editState("isSelectedLanguage")}
  selectedContact = ()=>{this.editState("isSelectedContact")}
  selectedAccount = ()=>{this.editState("isSelectedAccount")}
  selectedMonetise = ()=>{
    this.setState(
      {
        isOnMonetise: !this.state.isOnMonetise
      }
    )
    this.editState("")
  }
  selectedEmailAddress = ()=>{
    this.setState(
      {
        isOnEmailAddress: !this.state.isOnEmailAddress
      }
    )
    this.editState("")
  }
  selectedPhone = ()=>{
    this.setState(
      {
        isOnPhone: !this.state.isOnPhone
      }
    )
    this.editState("")
  }
  selectedCertifiedPro = ()=>{
    this.setState(
      {
        isOnCertifiedPro: !this.state.isOnCertifiedPro
      }
    )
    this.editState("")
  }
  selectedFilter = ()=>{
    this.setState(
      {
        isOnFilter: !this.state.isOnFilter
      }
    )
    this.editState("")
  }
  setTheme = ()=>{
    this.setState({
      isDark: !this.state.isDark
    })
    this.editState("")
  }

  render() {
    return(
      <div className="settings page">
        <div className="left-box">
          <div className="search">
            <div className="content">
              <Icon name="search" className="icon-gray" size={30} />
              <input type="text" id="search" className="search-title setting" placeholder={SettingItemName.search}/>
            </div>
          </div>
          <div className="items">
            <div className="upgrade item" onClick={this.selectedUpgrade} data-text={SettingItemName.upgrade}>
              <ArrowCard icon="guard" text={SettingItemName.upgrade} isEdit={this.state.isSelectedUpgrade}/>
            </div>
            <div className="money item" onClick={this.selectedMoney} data-text={SettingItemName.money}>
                <ArrowCard icon="wallet" text={SettingItemName.money} isEdit={this.state.isSelectedMoney}/>
                <div className="sub-items" style={{display: this.state.isSelectedMoney?'':'none'}}>
                  <div className="switch-card sub-item">
                    <div className="text vertical-center icon-empty">{SettingSubItemName.widthDraw}</div>
                    <div className="money-method vertical-center">PayPal:Account</div>
                  </div>
                  <div className="vertical-margin"/>
                  <SwitchCard icon="" text={SettingSubItemName.accountBalance} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Show" offTitle="Hide" type="sub-item"/>
                </div>
            </div>
            <div className="photo item" onClick={this.selectedPhoto} data-text={SettingItemName.photo}>
              <ArrowCard icon="wallpaper" text={SettingItemName.photo} isEdit={this.state.isSelectedPhoto} />
              <div className="sub-items" style={{display: this.state.isSelectedPhoto?'':'none'}}>
                <SwitchCard icon="" text={SettingSubItemName.readerTag} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/>
                <div className="vertical-margin"/>
                <SwitchCard icon="" text={SettingSubItemName.everyTag} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/>
              </div>
            </div>
            <div className="personalization item" onClick={this.selectedPersonalization} data-text={SettingItemName.personalization}>
              <ArrowCard icon="edit" text={SettingItemName.personalization} isEdit={this.state.isSelectedPersonalization} />
              <div className="sub-items" style={{display: this.state.isSelectedPersonalization?'':'none'}}>
                <SwitchCard icon="" text={SettingSubItemName.personData} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/>
                <div className="sub-desc">{SettingSubItemName.personSubDes}</div><div className="vertical-margin"/>
                <SwitchCard icon="" text={SettingSubItemName.personAds} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/><div className="vertical-margin"/>
                <SwitchCard icon="" text={SettingSubItemName.personDevice} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/><div className="vertical-margin"/>
                <SwitchCard icon="" text={SettingSubItemName.personPlace} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/><div className="vertical-margin"/>
                <SwitchCard icon="" text={SettingSubItemName.track} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/><div className="vertical-margin"/>
                <SwitchCard icon="" text={SettingSubItemName.share} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="Yes" offTitle="No" type="sub-item"/>
              </div>
            </div>
            <div className="language item" onClick={this.selectedLanguage} data-text={SettingItemName.language}>
              <ArrowCard icon="language" text={SettingItemName.language} isEdit={this.state.isSelectedLanguage} />
            </div>
            <div className="contact item"  onClick={this.selectedContact} data-text={SettingItemName.contacts}>
              <ArrowCard icon="profile" text={SettingItemName.contacts} isEdit={this.state.isSelectedContact} />
              <div className="sub-items" style={{display: this.state.isSelectedContact?'':'none'}}>
                  <div className="switch-card sub-item">
                    <div className="text vertical-center icon-empty">{SettingSubItemName.syncContact}</div>
                    <div className="money-method vertical-center">
                      <Icon className="icon-gray" name="sync" size={24}/>
                      <span className="underline">Sync With Contacts</span>
                    </div>
                  </div>
                  <div className="vertical-margin"/>
                  <div className="switch-card sub-item">
                    <div className="text vertical-center icon-empty">{SettingSubItemName.inviteContact}</div>
                    <div className="money-method vertical-center">
                      <Icon className="icon-gray" name="add" size={24}/>
                      <span className="underline">Invite</span>
                    </div>
                  </div>
                </div>
            </div>
            <div className="account item"  onClick={this.selectedAccount} data-text={SettingItemName.account}>
              <ArrowCard icon="block" text={SettingItemName.account} isEdit={this.state.isSelectedAccount} />
            </div>
            <div className="monetise item" data-text={SettingItemName.monetise}>
              <SwitchCard icon="dollar_fill" text={SettingItemName.monetise} isOn={this.state.isOnMonetise}  onClick={this.selectedMonetise} onTitle="ON" offTitle="OFF" type=""/>
            </div>
            <div className="mail item" data-text={SettingItemName.emailAddress}>
              <SwitchCard icon="mail_open" text={SettingItemName.emailAddress} isOn={this.state.isOnEmailAddress}  onClick={this.selectedEmailAddress} onTitle="ON" offTitle="OFF" type=""/>
            </div>
            <div className="phone item" data-text={SettingItemName.phone}>
              <SwitchCard icon="phone_android" text={SettingItemName.phone} isOn={this.state.isOnPhone}   onClick={this.selectedPhone} onTitle="ON" offTitle="OFF" type=""/>
            </div>
            <div className="certified item"  data-text={SettingItemName.certifiedPro}>
              <SwitchCard icon="guard" text={SettingItemName.certifiedPro} isOn={this.state.isOnCertifiedPro}  onClick={this.selectedCertifiedPro} onTitle="ON" offTitle="OFF" type=""/>
            </div>
            <div className="filter item" data-text={SettingItemName.filter}>
              <div className="card">
                <div className="text vertical-center">{SettingItemName.filter}</div>
                <CustomSwitch isOn={this.state.isOnFilter} onClick={this.selectedFilter}  onTitle="ON" offTitle="OFF"/>
              </div>
            </div>
            <div className="theme item"  data-text={SettingItemName.theme}>
              <div className="card">
                <div className="text vertical-center">{SettingItemName.theme}</div>
                <div className="theme-switch vertical-center" onClick={this.setTheme}>
                  <div className="title">{this.state.isDark?`Dark Mode`:`Light Mode`}</div>
                  <Icon name={this.state.isDark?`moon`:`sun`} className="icon-gray theme-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div style={{display: this.state.isSelectedLanguage?'':'none'}}>
            <LanguageBox />
          </div>
        </div>
      </div>
    )
  }
}

export default Settings;