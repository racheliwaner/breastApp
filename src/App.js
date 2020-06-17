import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import BorderWrapper from 'react-border-wrapper'
import Background from 'C:/Users/DELL/breastApp/src/main_page2.jpg'; 
    
class App extends Component{
  
  constructor () { 
    super()
    this.onClickForward = this.onClickForward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
    //this.cases = this.cases.bind(this)
  
    const IMG1 = require('C:/Users/DELL/breastApp/src/IMG5.jpg');
    const IMG2 = require('C:/Users/DELL/breastApp/src/IMG6.jpg');
    const IMG3 = require('C:/Users/DELL/breastApp/src/IMG1.jpg');
    const IMG4 = require('C:/Users/DELL/breastApp/src/IMG4.jpg');
    const img7 = require('C:/Users/DELL/breastApp/src/img7.jpg');
    const img8 = require('C:/Users/DELL/breastApp/src/img8.jpg');
    const img9 = require('C:/Users/DELL/breastApp/src/img9.jpg');
    const img10 = require('C:/Users/DELL/breastApp/src/img10.jpg');
    const img11 = require('C:/Users/DELL/breastApp/src/img11.jpg');
    const img12 = require('C:/Users/DELL/breastApp/src/img12.jpg');
    const img13 = require('C:/Users/DELL/breastApp/src/img13.jpg');
    const img14 = require('C:/Users/DELL/breastApp/src/img14.jpg');
    const img15 = require('C:/Users/DELL/breastApp/src/img15.jpg');
    const img16 = require('C:/Users/DELL/breastApp/src/img16.jpg');
     
    this.state = { index: 0, imgList:[IMG1,IMG2,IMG3,IMG4,img7,
                   img8,img9,img10,img15, img16, img14], string: 'זוהי ממוגרפיה של אישה בת 52 שהגיעה לבדיקת סקר, הרדיולוגים פענחו שרקמה סמיכה והמליצו על אולטרסאונד '}
    }
   
    onClickForward() {
    if(this.state.index + 1 === this.state.imgList.length) {
      this.setState({index: this.state.index});
      this.setState({string:'והשאירו קליפ'});
    } else {
      this.setState({index: this.state.index + 1});
      this.cases();
    }
  }
  
  onClickBack(){
    if (this.state.index - 1 === -1){
      this.setState({index: 0});
    } else {
      this.setState({index:(this.state.index - 1)});
      this.cases();
      }
  }
  
  cases() {
    if (this.state.index === 0)
    this.setState({string:'זוהי ממוגרפיה של אישה בת 52 שהגיעה לבדיקת סקר, הרדיולוגים פענחו שרקמה סמיכה והמליצו על אולטרסאונד '});
    else if (this.state.index === 1)
    this.setState({string:'באולטרסאונד מצאתי גוש בשד ימין'});
    else if (this.state.index === 2)
    this.setState({string:'ובשד שמאל'});
    else if (this.state.index === 3 || this.state.index === 4)
    this.setState({string:'אישה שהגיעה לבדיקת מעקב, בממוגרפיה רואים כל מיני ממצאים שפירים '});
    else if (this.state.index === 5)
    this.setState({string:'ממצא בשד ימין שעשו לו ביופסיה בעבר והוא שפיר'});
    else if (this.state.index === 6)
    this.setState({string:'ועוד כמה ממצאים שפירים'}); 
    else if (this.state.index === 7)
    this.setState({string:'ממצא בשד שמאל שלא רואים בממוגרפיה'});
    else if (this.state.index === 8)
    this.setState({string:'עשו לו ביופסיה'});
    else if (this.state.index === 9)
    this.setState({string:'והשאירו קליפ'});
  }
  render() {
    const mystyle = {color: "black",fontSize: 60,paddingBottom: 0, paddingTop: 20, display: "flex",
                     justifyContent: "center", alignItems: "center", fontFamily: "Shuneet"};

    return (
      <div className="App" style={{backgroundImage: `url(${Background})`,width: "100%" }}>   
      <header><link href='http://serve.fontsproject.com/css?family=Shuneet:400'
  rel='stylesheet' type='text/css'/></header>
        <p style={mystyle}>מקרים חשודים- דימות השד</p>
        <div style={{display: "flex" }}>
          <img style={{marginLeft: '13%',borderRadius: 8, height: 400, width: 400}} src={this.state.imgList[this.state.index]} alt="" /><br />
          <BorderWrapper style={{marginLeft: '10%', width: 500}}>{this.state.string} </BorderWrapper>
        </div>
        <div>
          <Button  style={{marginLeft: '0%'}} onClick={this.onClickBack} variant="outline-light" size="lg" >back</Button>{' '}
          <Button onClick={this.onClickForward} variant="outline-light" size="lg">forward</Button>   
        </div>   
          <p>{this.state.index}</p>
      </div>  
    );
  };
};

export default App;

