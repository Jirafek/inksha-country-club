import React, { useEffect, useState } from 'react';

import './map.css';
import Modal from 'components/Modal/Modal';
import { mapLogic, buttonsLogic } from './logic';
import Select from 'components/Select/Select';
import { V1, V2 } from './variants';

const Map = () => {
    const mapVersions = [
        {
            component: <V1 />,
            title: 'Лесная резиденция'
        },
        {
            component: <V2 />,
            title: 'Коттедж & Шалле'
        }
    ];

    const
        [modalActive, setModalActive] = useState(false),
        [ModalContent, setModalContent] = useState(() => <></>),
        [mapVer, setMapVer] = useState(0)


    useEffect(() => {
        buttonsLogic(document, setModalActive, setModalContent);

        mapLogic(document, mapVer);
        // window.dragMoveListener = dragMoveListener
    }, [mapVer]);

    return <section className='section map'>
        <div className='map-header'>
            <div
                className="map_title"
            >
                <img className="map_title__bg" src="/image/titles_bg.webp" alt="КАРТА ТЕРРИТОРИИ" />
                <h1 className="map_title__text">КАРТА ТЕРРИТОРИИ</h1>
            </div>
            <Select current={mapVer} setCurrent={setMapVer} datas={mapVersions} />
        </div>
        <div className='map-viewer'>
            { mapVersions[mapVer].component }
        </div>

        <Modal
            amiActive={modalActive}
            setAmiActive={setModalActive}
            Content={ModalContent}
        />
    </section>;
};

export default Map;