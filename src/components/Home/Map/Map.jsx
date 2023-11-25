import React, { useEffect, useState } from 'react';

import './map.css';
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
            title: 'Коттедж & Шале'
        }
    ];

    const [mapVer, setMapVer] = useState(0),
        [tooltipActive, setTooltipActive] = useState(false),
        [tooltipText, setTooltipText] = useState(''),
        [mapLook, setMapLook] = useState(true);


    useEffect(() => {
        buttonsLogic(document, setTooltipActive, setTooltipText);

        mapLogic(document, setTooltipActive);
    }, [mapVer]);



    // Выше было появление тайтла

    return <section className='section map' id='map'>
        <div className='map-header'>
            <div
                className="map_title"
            >
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="map_title__bg" src="/image/titles_bg.webp" alt="Карта Территории Икша Кантри Клаб" />
                </picture>

                <h2 className="map_title__text">КАРТА ТЕРРИТОРИИ</h2>
            </div>
            <Select current={mapVer} setCurrent={setMapVer} datas={mapVersions} />
        </div>
        <div className='map-viewer' onDoubleClick={() => setMapLook(true)}>
            <div className="map-wrapper">
                {mapVersions[mapVer].component}
                <div className={tooltipActive ? 'map-tooltip map-tooltip--active' : 'map-tooltip'}>
                    {tooltipText}
                </div>
            </div>
        </div>
        <div
            className={`map-looker ${!mapLook ? 'map-looker---close' : ''}`}
            onDoubleClick={() => setMapLook(!mapLook)}>
            Тапните два раза {!mapLook && 'чтобы заблокировать карту'}
        </div>
    </section>;
};

export default Map;