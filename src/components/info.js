import React,{useState} from 'react';

class Info extends React.Component{
  constructor(props){
    super(props)
    this.state  ={
      daily: []
    }
    this.addFood = this.addFood.bind(this)
    this.updateFood = this.updateFood.bind(this)
  }

  addFood(){
    this.setState ={
      daily: this.state.daily.concat([...this.state.daily, this.props.items[this.props.increment].fields.nf_sugars])
    }
  }

  updateFood(){
      console.log(this.state.daily)
  }

  render(){
  return(
    <div>
      <div>
        <h5>{this.props.title}</h5>
        <p>{this.props.brand}</p>
        <p>{this.props.cals}</p>
        <button className="add_food" key={this.props.increment} onClick={this.addFood}>Add Food</button>
      </div> 
        <p onClick={this.updateFood}>/////////////////</p>
    </div>
  )
  }
}

export default Info