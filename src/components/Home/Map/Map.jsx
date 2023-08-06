import React, { useEffect, useState } from 'react';

import './map.css';
import { V1, V2, V3 } from './variants/index.js';
import Modal from 'components/Modal/Modal';
import { mapLogic, buttonsLogic } from './logic';

const Map = () => {

    const [modalActive, setModalActive] = useState(false);
    const [ModalContent, setModalContent] = useState(() => <></>);


    useEffect(() => {
        buttonsLogic(document, setModalActive, setModalContent);

        mapLogic(document);
    }, []);

    return <section className='section map'>
        <div
            className="map_title"
            style={{ transform: 'translateX(-50%)' }}
        >
            <img className="map_title__bg" src="/image/titles_bg.webp" alt="КАРТА ТЕРРИТОРИИ" />
            <h1 className="map_title__text">КАРТА ТЕРРИТОРИИ</h1>
        </div>
        <div className='map-viewer'>
            <V1 />
        </div>

        <Modal
            amiActive={modalActive}
            setAmiActive={setModalActive}
            Content={ModalContent}
        />
    </section>;
};

export default Map;