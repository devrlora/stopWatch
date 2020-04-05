import React from "react"; 
import ReactDOM from 'react-dom';

/*create a Button class the listens for an onClick event, starts/pauses timer,*/
class Buttons extends React.Component {
    render(){

        /* boolean statement that checks if button was started or not*/

        return ( 
        /* return new state of button*/
        <div>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        </div>
       
        );
    }
}
        /* pass Buttons component to App*/
export default Buttons;
