import React, { useState} from 'react';
import close1 from './assets/close1.png';
import './DownloadFilePopup.css';


function DownloadFilePopup(props) {


  return (
    <div>
      <div className='overlay'> </div>
      <div className='DownloadFilePopupMain'>
        <img src={close1} className='close' alt='closetheimage' onClick={()=>{props.setshow_download_popup(false)}} />             
            
        <div className='top_img'></div>

        <div className='Download_file_popup_text'> אישור להורדת תמונה </div>
      </div>
    </div>
  );
}
export default DownloadFilePopup
