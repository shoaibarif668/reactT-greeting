import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/main.css';

let curDate= new Date();
curDate= curDate.getHours();
let greeting= '';
let cssStyle={
  backgroundColor : "white"
};


  if(curDate >= 1 && curDate <=11){
    greeting='Good Morning';
    cssStyle.color ="Red";
  }
  else if(curDate >= 12 && curDate <=19){
    greeting='Good AfterNoon';
    cssStyle.color ="Green";
  }
  else{
    greeting='Good Night';
    cssStyle.color ="Black";
  }


ReactDOM.render(
  <>
  <div className="H-greet">
    <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
  </div>

  </>,
  document.getElementById('root')
);

