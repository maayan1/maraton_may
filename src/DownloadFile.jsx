import './DownloadFile.css';
import new_img from './assets/new.png';

function DownloadFile(props){
    return(
        <div className={'Download_file_cont ' + props.top} >
            {props.top==="bottom" ? <img src={new_img} className='pro_img' alt='pro' /> : <></>}

            <div className={'file_title '+props.top+"_title"}>  {props.title} </div>
            <div className='file_subtitle'>{props.sub_title} </div>
            <button className='file_btn'>{props.btn}</button>
            <div className='check_box_text'>{props.check_box_text}</div>
        
        </div>
    );
}

export default DownloadFile;