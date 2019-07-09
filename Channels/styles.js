import styled from 'styled-components';
export const Channelssection = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 10px;
  
  color: black;
  height: 64vh;
   
    padding: 10px;
    width: 150px;
    border-radius: 2px;
    box-shadow: 2px 2px 9px 2px darkgrey;
    overflow: scroll;
   border: 2px solid #000000;
   
 
 
`;
export const ChannelInnersection = styled.text`
  height: 30px;
    text-align: center;
    display: flex;
    cursor: pointer;
 margin-top:10%;
 
`;
 export const Label = styled.label`
  font-size: 20px;
  
  margin: 20px 0 10px;
`



 export const RedDotHide = styled.div`
  
    border-radius: 8px;
    height: 16px;
    width: 16px;
    margin-right: 5px;
  `
  
 export const RedDotShow = styled.div`
  
 background: red;
    border-radius: 8px;
    height: 16px;
    width: 16px;
    margin-right: 5px;
  `
 
 export const modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 50%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
export const modalcontent = styled.div`
 position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
`
export const modalbody = styled.div`
 padding: 2px 16px;
  
`