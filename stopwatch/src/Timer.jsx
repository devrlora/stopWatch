import React, {Component } from 'react';

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
        this.start = this.start.bind(this)
        // this.stop= this.stop.bind(this)
        // this.reset = this.reset.bind(this)
      }
      // Create start function and set initial object properties
      // 'start' object is off by default until clicked event, storing current time.
      // When the timer is clicked,the time elapsed is displayed.
    startTimer(){
        this.setState({
            time: this.state.time,
            isOn: true,
            startTimer: Date.now() - this.state.time
          })
          this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.startTimer
          }), .1000);
          }
    stop(){
      this.setState({
        isOn: false,
        startTimer: Date.now() - this.state.time
      })
    }
    render(){

        /* ternary statement that checks if button was started or not, 
        displays button if true,nothing if false*/
        let startTimer = (this.state.time == 0) ?
        <button onClick={this.startTimer}>start</button> :
        null
      let stop = (this.state.time == 0 || !this.state.isOn) ?
        null :
        <button onClick={this.stopTimer}>stop</button>
      let resume = (this.state.time == 0 || this.state.isOn) ?
        null :
        <button onClick={this.startTimer}>resume</button>
      let reset = (this.state.time == 0 || this.state.isOn) ?
        null :
        <button onClick={this.resetTimer}>reset</button>
        return ( 
        /* return new state of button*/
        <div>
        {/* <h1>Seconds Passed: {this.state.startTimer}</h1>  */}
        <h1>{(this.state.time)}</h1>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
       
        );
    }
}
/* pass Buttons component to App*/
export default Timer;
