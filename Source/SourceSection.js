import React from 'react';
import './styles.js';
import styled from 'styled-components';
import {
 
  Button,Input,SourceSectiondiv,Label
  
} from './styles.js';

class SourceSection extends React.Component{
constructor(props){
	super(props);
//this.GO = this.GO.bind(this);
}
  GO(event){
	  alert("1")
  }
  
	render() {
return (

 
    <SourceSectiondiv>
	
	<Label htmlFor='start'>Source</Label>
   <Input />
    <Button onClick={(event) => this.GO(event)}>Go !</Button>
    </SourceSectiondiv>
  

);
}
}
export default  SourceSection;