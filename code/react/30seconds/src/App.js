import React, { Component } from 'react'
import Timer from './components/Timer'
import TimerInput from './components/TimerInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00', // responsible for the seconds
      minutes: ''
    }
  }

  //bind the method to the constructor

  this.handleChange = this.handleChange.bind(this)

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    })
  }

    render() {
        return (
          
        <div> 
          <TimerInput minutes ={this.state.minutes}/>
          <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
          <Startbutton/>
        </div>
       
        );
    }

}

export default App;
