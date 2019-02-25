import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      XO:'X',     
      fieldToe:Array(9).fill(' '),
      gameIsFinish:false,
      totalCombination:1,     
      text: ' ',
    }
  }
  
  clicked(event){

    if(this.state.gameIsFinish){ 
      return true;
   }

   if(this.state.fieldToe[event.target.dataset.squares]===' '){
      this.state.fieldToe[event.target.dataset.squares]=this.state.XO;
      event.target.innerText=this.state.XO;
      this.setState({
        XO:this.state.XO==='X'?'O':'X',  
        fieldToe:this.state.fieldToe,
        totalCombination:this.state.totalCombination+1
      });  

      const result =this.foundWiner();
      
      if(result==='X'){        
        this.setState({
          text:'Winner is X',
          gameIsFinish:true,
        }) 

      } else 
      if(result==='O'){         
        this.setState({      
          text:'Winner is O',
        gameIsFinish:true,
        })
      }else
      if(this.state.totalCombination===9){         
        this.setState({ 
          text:'DRAW',
          gameIsFinish:true,
        })
      } 
    }
  }
  foundWiner(){ 
    let combination=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    let fieldToe=this.state.fieldToe;
    for (let i = 0; i < combination.length; i++) {      
      if (fieldToe[combination[i][0]]===fieldToe[combination[i][1]]
        &&fieldToe[combination[i][0]]===fieldToe[combination[i][2]])
      { 
        return fieldToe[combination[i][0]];
      } 
    }    
  }
  render() {  
    return (
    <div id="game">
      <div id="head">
          TIC TAC TOE
      </div>
      <div id="box" 
          onClick={(element)=>this.clicked(element)}
      >       
        <div className="square" data-squares="0"></div>     
        <div className="square" data-squares="1"></div>
        <div className="square" data-squares="2"></div>
        <div className="square" data-squares="3"></div>
        <div className="square" data-squares="4"></div>
        <div className="square" data-squares="5"></div>
        <div className="square" data-squares="6"></div>
        <div className="square" data-squares="7"></div>
        <div className="square" data-squares="8"></div>
      </div>
      <div id="winner">{this.state.text}</div>
    </div>
    );
  }
}
export default App;
