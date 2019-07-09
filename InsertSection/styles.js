import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 10px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding:10px;
  transition: 0.5s all ease-out;
    margin-top: 10%;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
export const AssetSectionButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 10px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding:10px;
  transition: 0.5s all ease-out;
    margin-top: 500px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
 export const Insert = styled.div`
    margin-top:170px;
    
  `;
   export const SourceSectiondiv = styled.div`
      margin-top:-150%;
    
  `;
  
  export const Modal=styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 60px; /* Location of the box */
 float:left;
 right:7%;
  top: 15px;
  width: 280px; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
   position: fixed;
 
   `;
   
  export const ModalContent = styled.div`
   position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
      top: 40px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
    `;
 
   export const SourceModal=styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
 
 right:1%;
  top: 190px;
  width: 280px; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
   position: fixed;
 
   `;
export const SourceModalContent = styled.div`
   position: relative;
  background-color: #fefefe;
  float:right;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
    `;  