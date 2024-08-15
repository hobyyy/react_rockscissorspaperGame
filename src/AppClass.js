import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass'

const choice = {
  Rock:{
    name:"Rock",
    img:"https://i0.wp.com/the-avocado.org/wp-content/uploads/2019/11/1057A137-F2BE-41F1-811A-EB67B5114074.jpeg?fit=980%2C653&ssl=1" 
  },
  Scissors:{
    name:"Scissors",
    img:"https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp"
  },
  Paper:{
    name:"Paper",
    img:"data:image/png;base64,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"
  }
}

export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    }
  }
  play = (userChoice) => {
    // setUserSelect(choice[userChoice]);
    const computerChoice = this.randomChoice();
    const judgementResult = this.judgement(choice[userChoice],choice[computerChoice])
    console.log('judgementResult ', judgementResult)
    // setComputerSelect(choice[computerChoice]);
    // setResult(judgement(choice[userChoice],choice[computerChoice]));
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: choice[computerChoice],
      result: judgementResult
    })
  }

  randomChoice = () => {
    const itemArray = Object.keys(choice) // 객체의 key값만 뽑아서 array로 만들어주는 함수
    const randomItem = Math.floor(Math.random() * itemArray.length)
    return itemArray[randomItem]
  }

  judgement = (user, computer) => {
    if(user.name === computer.name) return "tie"
    else if(user.name==='Rock') return computer.name==='Scissors'?'win':'lose' //user이김 : rock > scissors
    else if(user.name==='Scissors') return computer.name==='Paper'?'win':'lose' //user이김 : scissors > paper  
    else if(user.name==='Paper') return computer.name==='Rock'?'win':'lose' //user이김 : paper > rock
  }

  render() {
    return (
      <div>
        <div className='box-area'>
          <BoxClass title='YOU' item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title='COMPUTER' item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className='button-area'>
          <button onClick={() => this.play('Scissors')}>가위</button>
          <button onClick={() => this.play('Rock')}>바위</button>
          <button onClick={() => this.play('Paper')}>보</button>
        </div>
      </div>
    );
  }
}
