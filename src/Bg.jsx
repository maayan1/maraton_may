import './Bg.css';
import close_red from './assets/close.png'
import DownloadFile from './DownloadFile';
import banner from './assets/banner.png'
import logo from './assets/logo.png'

function Bg() {
  return (

  <div className='bg_cont'>
    <img src={close_red} className='close_red' alt="close img" />

        <div className='header'>
                <div className='header_title'> העלאת תמונה כדי להסיר את הרקע </div>

                <div className='header_formats'> פורמטים נתמכים: png, jpeg </div>
                <button className='upload_img_btn'> העלאת תמונה </button>

        </div>
        <div className='middle_cont'>
            <div className='right_div'>
              <DownloadFile title="תמונה חינם" top ="top" sub_title="תצוגה מקדימה של תמונה" btn="הורד" check_box_text="איכות טובה עד 0.25 מגה פיקסל"></DownloadFile>
              <DownloadFile title="Pro" top="bottom" sub_title="תצוגה מקדימה של תמונה" btn=" HD הורד" check_box_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></DownloadFile>
            </div>

            <div className='left_div'>

            </div>

        </div>
    <div className='footer'>

        <img src={banner} className='banner' alt="banner img"/>
        <img src={logo} alt="creator img"/>

    </div>

  </div>

  );
}

export default Bg;