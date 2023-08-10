import interact from 'interactjs';

import positions from './positions.json';

export const
    mapLogic = (document, mapVer) => {
        const
            mapSection = document.querySelector('.map'),
            map = document.querySelector('.map-viewer'),
            mapScale = document.querySelector('.map-wrapper');

        map.style.transform = 'translate(0px, 0px)';

        const
            dragMoveListener = __event => {
                let
                    target = __event.target,
                    [x, y] = dragRestriction(
                        target,
                        (parseFloat(target.getAttribute('data-x')) || 0) + __event.dx,
                        (parseFloat(target.getAttribute('data-y')) || 0) + __event.dy
                    );

                target.style.transform = `translate(${x}px, ${y}px)`;

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
            dragRestriction = (target, x, y) => {
                const
                    targetW = target.getBoundingClientRect().width,
                    targetH = target.getBoundingClientRect().height,

                    targetLeft = x + targetW / 2 - targetW * ss / 2,
                    targetTop = y + targetH / 2 - targetH * ss / 2,
                    targetRight = mapSection.clientWidth - (targetLeft + targetW * ss),
                    targetBottom = mapSection.clientHeight - (targetTop + targetH * ss);

                let modX = x, modY = y;

                if (targetW * ss == mapSection.clientWidth || targetLeft > 0)
                    modX = -targetW / 2 + targetW * ss / 2

                if (targetRight > 0)
                    modX = -(targetW * ss - mapSection.clientWidth) + (targetW * ss / 2 - targetW / 2);

                if (targetH * ss == mapSection.clientHeight || targetTop > 0)
                    modY = -targetH / 2 + targetH * ss / 2;

                if (targetBottom > 0)
                    modY = -(targetH * ss - mapSection.clientHeight) + (targetH * ss / 2 - targetH / 2);

                return [modX, modY];
            };

        let scale = 1;
        let ss = 1;

        interact(map)
            .gesturable({
                listeners: {
                    // start: __event => {
                    // },
                    move: __event => {
                        let
                            elemScale = __event.scale * scale,
                        currentScale = elemScale < 1 ? 1 : elemScale;

                        ss = currentScale;

                        mapScale.style.transform = `scale(${currentScale})`

                        dragMoveListener(__event);
                    },
                    end: __event => {
                        scale = scale * __event.scale
                        ss = scale;
                        // currentScale = scale;
                    }
                }
            })
            .draggable({
                listeners: { move: dragMoveListener }
            });



    },
    buttonsLogic = (document, setModalActive, setModalContent) => {
        const buttonsList = document.querySelector('.map-controls-list');
        buttonsList.addEventListener('click', __event => {
            if (__event.target.closest('.map_button')?.dataset.position) {
                const button = __event.target.closest('.map_button');
                const num = +button.dataset.position;

                setModalActive(true);

                const content = () => {

                    const currentPosition = positions.filter(position => position.id === num)[0];

                    if (currentPosition) {
                        return <>
                            <img src={currentPosition.images[0]} />
                            <h1>{currentPosition.title}</h1>
                            <p>{currentPosition.text}</p>
                        </>;
                    }
                    return <>
                        <h1>Данных пока нет!</h1>
                    </>;
                };

                setModalContent(content);
            }
        })
    };