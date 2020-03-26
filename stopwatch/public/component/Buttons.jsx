// import React from "react";

// const Buttons = React.createclass({

//     render:function(){
//         return <div>
// <h1>0:00</h1>
// <button type="button">start</button>
// </div>;
// }
// });

// React.render({Buttons},document.body);
//  export default Buttons;

class TimerInput extends React.Component {
    render() {
      return (
       <div style={{marginLeft:100}}>
          <h3>Input your desired time</h3>
          <input type="number" required />
      </div>
         );
       }
    }
    class Timer extends React.Component {
       render() {
          return (
           <div>
            <h1 style={{ fontSize: 100, marginLeft:100 }}> </h1>
           </div>
         );
       }
     }
    class StartButton extends React.Component {
       render() {
         return(
          <div style={{ marginLeft: 130 }}>
           <button>Start</button>
         </div>
          );
      }
    }
    class App extends React.Component {
       render() {
          return (
           <div>
            <TimerInput/>
            <Timer/>
           <StartButton/>
          </div>
         );
       }
     }

