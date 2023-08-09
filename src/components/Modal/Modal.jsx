import React from 'react';

import './modal.css';

const Modal = ({ amiActive, setAmiActive, Content }) => {

    return <>
        <aside
            className={amiActive ? 'modal modal--show' : 'modal'}
            onClick={() => setAmiActive(prevState => !prevState)}
        >
            <div className='modal-content' onClick={__event => __event.stopPropagation()}>
                {/* <button className='modal_close'></button> */}
                {Content}
            </div>
        </aside>
    </>;
};

export default Modal;