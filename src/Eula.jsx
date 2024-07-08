import React, { useState} from 'react';
import './Eula.css';
import close1 from './assets/close1.png';


function Eula(props) {

  

  return (
    <>
      <div className='overlay'> </div>
      <div className='Eula_cont'>
        <img src={close1} className='close' alt='close popup' onClick={()=>{props.close_popup_func(false)}} />             
        
        <div className='eula_text'>fsfsddf</div>
      </div>
    </>
  );
}

export default Eula
