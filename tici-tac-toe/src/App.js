import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      XO:'X'     
    }
    }
  
  clicked(event){
   event.target.innerText=this.state.XO;
   this.setState({
     XO:this.state.XO==='X'?'O':'X'
   })
   console.log(this.state.XO)
  }
  render() {
   
    return (
     <div id="game">
      <div id="head">
      TIC TAC TOE
      </div>
      <div id="board" 
        onClick={(element)=>this.clicked(element)}
      >
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>      
      </div>
     </div>
    );
  }
}

export default App;
