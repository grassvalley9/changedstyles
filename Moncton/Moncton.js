import React from 'react';
import MonctonDetails from '../MonctonDetails/MonctonDetails';
import Channels from '../Channels/Channels';
import './styles.css';
import ControlPoint from '../ControlPoint/ControlPoint';
import Countdown from '../Countdown/Countdown';
import AssetSection from '../AssetSection/AssetSection';
import InsertSection from '../InsertSection/InsertSection';
import styled from 'styled-components';
import {
 
 Monctondiv,Monctondiv1,Monctonsection,Channelcontrolpointsection,Countdownsection
  
} from './styles.js'
class Moncton extends React.Component{
	constructor(props){
	  
    super(props);
	this.state = {
    curTime: null,
}
	 }
	 
componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

	 render() {
		 


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var ampm = today.getHours() >= 12 ? 'PM' : 'AM ';
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//this.setState({ time: time });
 
  return (
    <Monctondiv>
      <Monctonsection>
        <MonctonDetails />
        <div style={{marginLeft:"1%",marginTop:"-3%"}}>
          <ControlPoint />
          <Channels />
        
        </div>
        <Channelcontrolpointsection >
          <Countdown timer={time}/> 
         
              <InsertSection/>
         </Channelcontrolpointsection>
      </Monctonsection>
      </Monctondiv>
  );
}
	}
	export default Moncton;