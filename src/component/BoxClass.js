import React, { Component } from 'react'

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = '';
  }
  getResult = () => {
    if(this.props.title==='COMPUTER' && this.props.result!== 'tie' && this.props?.result !=='') {
      this.result = this.props.result === 'win' ? 'lose' : 'win';
    }else {
      this.result = this.props.result;
    }
  }
  render() {
    this.getResult();
    return (
        <div className='box' style={{ backgroundColor: this.result==='win'?'green' : this.result==='lose' ? 'red' :'lightgray'}}>
          <h1>{this.props.title}</h1>
          <h2 data-testid="item-name">{this.props.item && this.props.item.name}</h2> 
          <img 
            className='item-image' 
            src={this.props.item && this.props.item.img}
          />
          <h2>{this.result}</h2>
        </div>
      )
  }
}
