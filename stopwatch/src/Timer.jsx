import React, {Component } from 'react';

// set the initial timer props for when page loads
// bind the timer states for use when the button class them
class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
          time: 0,
          isOn: false,
          startTime: 0
        }
        // bind the timer states for use when the button calls them
        this.start = this.start.bind(this)
        // this.stop= this.stop.bind(this)
        // this.reset = this.reset.bind(this)
      }
      // Create start function and set initial object properties
      // 'start' object is off by default until clicked event, storing current time.
      // When the timer is clicked,the time elapsed is displayed.
    start(){
        this.setState({
            time: this.state.time,
            isOn: false,
            startTime: Date.now() - this.state.time
          })
      
          }
    
    render(){

        /* boolean statement that checks if button was started or not*/

        return ( 
        /* return new state of button*/
        <div>
            <h1>time</h1>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        </div>
       
        );
    }
}
        /* pass Buttons component to App*/
export default Timer;
