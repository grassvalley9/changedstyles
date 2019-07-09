import React from 'react';

import SourceSection from '../Source/SourceSection';
import AssetSection from '../AssetSection/AssetSection';
import styled from 'styled-components';

import Popup from "reactjs-popup";
import {
 
  Button,Insert,SourceSectiondiv,Modal,ModalContent,AssetSectionButton,SourceModal,SourceModalContent
  
} from './styles.js'


class InsertSection extends React.Component{
constructor(props){
 
    super(props);
this.TakeClip = this.TakeClip.bind(this);
this.Takelive = this.Takelive.bind(this);

  
}
  
TakeClip(event){
var modal = document.getElementById("AssetSection");


 modal.style.display = "block";
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  }
  Takelive(event){
var modal = document.getElementById("SourceSection");



 modal.style.display = "block";
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }
  
render() {
return (

<Insert >


      
     <SourceSectiondiv>
<AssetSectionButton onClick={(event) => this.TakeClip(event)}>Insert and Take Clip</AssetSectionButton>
<Modal id="AssetSection" >
<ModalContent>
      <AssetSection/>
     </ModalContent>

</Modal>
  
    </SourceSectiondiv> 
    <Button onClick={(event) => this.Takelive(event)}>Insert and Take Live</Button>
<SourceModal id="SourceSection" >
<SourceModalContent>
 <SourceSection/>
  </SourceModalContent>

</SourceModal>
    </Insert>



);
}
}


export default  InsertSection;