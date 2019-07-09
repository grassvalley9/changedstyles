import React from 'react';

import styled from 'styled-components';
import {
 
  Label,Channelssection,ChannelInnersection,RedDotShow,RedDotHide
  
} from './styles.js'
const channels = [
  {
    name: 'Moncton',
    scheduled: false
  },
  {
    name: 'Quebec',
    scheduled: true
  },
   
  {
    name: 'Rimqouski',
    scheduled: false
  },
  {
    name: 'Ottowa',
    scheduled: false
  },
  {
    name: 'Toronto',
    scheduled: false
  },
  {
    name: 'Trois-Riveries',
    scheduled: false
  },
  {
    name: 'Sherebrooke',
    scheduled: true
  },
  
  {
    name: 'Sogueny',
    scheduled: false
  },
];
export default function Channels() {
  return (
  <div>
   <Label htmlFor='start'>Channels</Label>
      <br />
  
    <Channelssection >
	
    
      {channels.map(x => (
        <ChannelInnersection >
          {<div className={x.scheduled ? <RedDotShow/> :  <RedDotHide/>} />}
          <span>{x.name}</span>
        </ChannelInnersection>
      ))}
    </Channelssection>

	</div>
   
  );
}