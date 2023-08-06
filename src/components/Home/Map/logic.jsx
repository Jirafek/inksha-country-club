import interact from 'interactjs';

import Slider from 'react-slick';
import positions from './positions.json';

export const
    mapLogic = document => {
        const
            map = document.querySelector('.map-viewer'),
            mapScale = document.querySelector('.map-wrapper');

        let angleScale = {
            angle: 0,
            scale: 1
        }
        function dragMoveListener(event) {
            var target = event.target
            // keep the dragged position in the data-x/data-y attributes
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

            // translate the element
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

            // update the posiion attributes
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
        }


        interact(map)
            .gesturable({
                listeners: {
                    start(event) {
                        angleScale.angle -= event.angle

                        mapScale.classList.remove('reset')
                    },
                    move(event) {
                        var currentScale = event.scale * angleScale.scale

                        mapScale.style.transform = `scale(${currentScale < 1 ? 1 : currentScale})`

                        // uses the dragMoveListener from the draggable demo above
                        dragMoveListener(event)
                    },
                    end(event) {
                        // angleScale.angle = angleScale.angle + event.angle
                        angleScale.scale = angleScale.scale * event.scale

                        mapScale.classList.add('reset')
                    }
                }
            })
            .draggable({
                inertia: true,
                listeners: { move: dragMoveListener },
                // modifiers: [
                //     interact.modifiers.restrictRect({
                //         restriction: document.querySelector('.map'),
                //         endOnly: true
                //     })
                // ],
            })
    },
    buttonsLogic = (document, setModalActive, setModalContent) => {
        const buttonsList = document.querySelector('.map-controls-list');
        buttonsList.addEventListener('click', __event => {
            if (__event.target.closest('.map_button')?.dataset.position) {
                const button = __event.target.closest('.map_button');
                const num = +button.dataset.position;

                setModalActive(true);

                const content = () => {

                    const current = positions.filter(position => position.id === num)[0];

                    if (current) {
                        return <>
                            <img src={current.images[0]} />
                            <h1>{current.title}</h1>
                            <p>{current.text}</p>
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