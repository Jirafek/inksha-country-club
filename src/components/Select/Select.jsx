import React, { useState } from 'react';
import './select.css';

const Select = ({ current, setCurrent, datas }) => {

    const
        [amiOpen, setAmiOpen] = useState(false);

    return <div className={amiOpen ? 'select select--open' : 'select'}>
        <button
            className='select_button'
            onClick={() => setAmiOpen(!amiOpen)}
        >{datas[current].title}</button>

        <ul className='select-list'>
            {datas.map((elem, i) => {
                if (i === current) return

                return <li
                    key={i}
                    className='select_state'
                    onClick={() => {
                        setCurrent(i)
                        setAmiOpen(false)
                    }}

                >
                    {elem.title}
                </li>
            })}
        </ul>
    </div>;
};

export default Select;
