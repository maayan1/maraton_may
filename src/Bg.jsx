import './Bg.css';
import close_red from './assets/close.png'
import DownloadFile from './DownloadFile';
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import React,  { useState,useRef} from 'react';
import NoBg from './NoBg';
import Eula from './Eula';
import DownloadFilePopup from './DownloadFilePopup';




function Bg() {

  const [ show_eula,setshow_eula] = useState(false);
  const [ show_downloadPopup,setshow_downloadPopup] = useState(false);

  const inputElement = useRef();


  const [ selected_tab_no_bg , setselected_tab_no_bg] = useState('selected_tab');
  const [ selected_tab_original , setselected_tab_original] = useState('');

  function update_tab_no_bg(e){

    if(e.target.className === 'tab_no_bg '  || e.target.className ===  'tab_no_bg selected_tab') {
        setselected_tab_no_bg('selected_tab');
        setselected_tab_original('');
      }
      else {
        setselected_tab_no_bg('');
        setselected_tab_original('selected_tab');
      }
  }

function show_eula_func(){
  setshow_eula(true);
}

const fileInput = () => {
  inputElement.current.click();
};




  return (
      <>

        <div className='bg_cont'>
          <img src={close_red} className='close_red' alt="close img" />

            <div className='header'>
              <div className='header_title'> העלאת תמונה כדי להסיר את הרקע </div>

              <div className='header_formats'> פורמטים נתמכים: png, jpeg </div>
              <button className='upload_img_btn' onClick={fileInput} > העלאת תמונה </button>
              <input type="file" ref={inputElement} className='inputFileClass' ></input>

            </div>

            <div className='middle_cont'>
              <div className='right_div'>
                <DownloadFile setshow_downloadPopup={setshow_downloadPopup} title="תמונה חינם" top ="top" sub_title="תצוגה מקדימה של תמונה" btn="הורד" check_box_text="איכות טובה עד 0.25 מגה פיקסל"></DownloadFile>
                <DownloadFile title="Pro" top="bottom" sub_title="תצוגה מקדימה של תמונה" btn=" HD הורד" check_box_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></DownloadFile>
              </div>

              <div className='left_div'>
                  <div className='tabs_cont'>
                      <div className={'tab_no_bg ' + selected_tab_no_bg } onClick={update_tab_no_bg}>הוסר רקע</div>
                      <div className={'tab_original ' + selected_tab_original } onClick={update_tab_no_bg}>מקורי</div>
                  </div>


                  {selected_tab_no_bg === 'selected_tab' ? <NoBg comt_type="no_bg" /> : <NoBg comt_type="original" />}

                    <div className='footer_left_div'>

                        <div className='footer_left_div_text' >על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות</div>

                        <button className='eula' onClick={show_eula_func}> תקנון החברה</button>

                    </div>

              </div>

            </div>
            <div className='footer'>

                <img src={banner} className='banner' alt="banner img"/>
                <img src={logo} alt="creator img"/>

            </div>


        </div>
              {show_eula ? <Eula close_popup_func={setshow_eula}  ></Eula>: <></>}
              
              {show_downloadPopup ? <DownloadFilePopup setshow_downloadPopup={setshow_downloadPopup}></DownloadFilePopup>: <></>}



      </>
  );
}

export default Bg;