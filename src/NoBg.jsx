import './NoBg.css';

import React, { useRef} from 'react';

import imgToRemove from './assets/imgToRemove'

function NoBg(props) {
    //props.comt_type
    const inputElement = useRef();

    const focusInput = () => {
        
      inputElement.current.click();
    };

  
  return (
      <div className='no_bg_cont'>
                    {props.comt_type === 'no_bg'?
                    <div>
                    <div className='no_bg_cont_text'> אל תשכח להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף </div>
                    <div className='bg_color' onClick={focusInput}>צבע רקע</div>
                    <input type="color" ref={inputElement} className='color_input'/> 
                    </div>
                    : <></>}     

                    <img src={imgToRemove} className='image' alt='front'/>                    
       </div>
  );
}

export default NoBg;
