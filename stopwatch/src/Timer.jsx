import React, {Component } from 'react';
import './Timer.css';


// set the initial timer props for when page loads
// bind the timer states for use when the button class them
class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
          time: 0,
          isOn: false,
          startTimer: 0
        }
        // bind the timer states for use when the button calls them
        this.startTimer = this.startTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
  }
      // Create start function and set initial object properties
      // 'start' object is off by default until clicked event, storing current time.
      // When the timer is clicked,the time elapsed is displayed.
      startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
      }
      pauseTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }
      resetTimer() {
        this.setState({time: 0, isOn: false})
      }
    render(){

        /* ternary statement that checks if button was started or not, 
        displays button if true,nothing if false*/
        let startTime = (this.state.time == 0) ?
      <button className= 'Button' onClick={this.startTimer}>Start</button> :
      null
    let stop = (this.state.time == 0 || !this.state.isOn) ?
      null :
      <button className= 'Button' onClick={this.pauseTimer}>Pause</button>
    let resume = (this.state.time == 0 || this.state.isOn) ?
      null :
      <button className= 'Button' onClick={this.startTimer}>Resume</button>
    let reset = (this.state.time == 0 || this.state.isOn) ?
      null :
      <button className= 'Button' onClick={this.resetTimer}>Reset</button>
        /* return new state of button*/
    return(
      <div>
        <h1>{(this.state.time)}</h1>
        <div>
        {startTime}
        {resume}
        {stop}
        {reset}
        </div>
      </div>
       
        );
    }
}
/* pass Buttons component to App*/
export default Timer;
