import React from 'react';
import './Popup.css'

const Popup = ({popup, setPopup}) => {
    return (
        <div 
            className={popup ? 'popup active' : 'popup'} 
            onClick={() => setPopup(!popup)}
        >
            <span className='popup__line first'></span>
            <span className='popup__line second'></span>
        </div>
    );
};

export default Popup;