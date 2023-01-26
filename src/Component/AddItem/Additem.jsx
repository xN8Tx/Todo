import React,{useState} from 'react';
import './Additem.css'
import FetchData from '../../FetchData/fetchData';
import { DoneSvg } from '../../Svg/indexSvg';

const Additem = ({setPopup,post}) => {
    const [value, setValue] = useState('')
    return (
        <div className='add-item'>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className='input' placeholder='What u want to do'/>
            <button className='button'
                onClick={() => {
                    post({
                        "id": `${Math.random() * 100000}`,
                        "status": false,
                        "name": `${value}`
                    })
                    setPopup(false)
                }}
            >
                <DoneSvg />    
            </button>            
        </div>
    );
};

export default Additem;