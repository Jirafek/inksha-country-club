import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import BookingCalendar from '../BookPicker';
import { useForm } from 'react-hook-form';
import routes from '../../utils/Home/routes';
import { v4 as uuidv4 } from 'uuid';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLines = {
    hidden: {
        opacity: 0,
        clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
        },
    },
};

const Welcome = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [burgerState, setBurgerState] = useState(false);

    function handleBurgerClick() {
        setBurgerState(!burgerState);
    }

    useEffect(() => {
        BookingCalendar([], 'zaezd'); // get data from FireBase
        BookingCalendar([], 'viezd'); // get data from FireBase
        setTimeout(() => {
            document.querySelector('.animate-moveSky1').style.display = 'none'
            document.querySelector('.animate-moveSky2').style.display = 'none'
        }, 2000)
    }, []);
    return (
        <section id='book' className="relative m-0">
            <img className="w-full" src="/image/bg1.png" alt="" />
            <img style={burgerState ? {display: 'block'} : {}} className={` hidden absolute w-full z-[9] top-0`} src="/image/bg-burger.png" alt="" />
            <div style={burgerState ? {display: 'flex', transform: 'translateX(-50%)'} : {transform: 'translateX(-50%)'}} className={` hidden absolute pl-[21px] flex-col left-1/2 gap-[15px] w-[305px] bg-[#FFEFE4] rounded-[20px] top-28 z-10`}>
                {routes.map((el, i) => {
                    return (
                        <a key={uuidv4()} href={el.link} className='flex gap-[1px]'>
                            <p className='monterey'>
                                {el.text}
                            </p>
                            {el.icon && <img src={el.icon} />}
                        </a>
                    );
                })}
            </div>
            <div style={{ transform: 'translateX(-50%)' }} className='absolute top-0 left-1/2 w-[260px] doska-container animate-moveDoska'>
                <img className='w-full h-full' src="/image/doska.png" alt="" />
                <img style={{ transform: 'translateX(-50%)' }} className='absolute left-1/2 bottom-[25px]' src="/image/call.png" alt="" />
                <img style={{ transform: 'translateX(-50%)' }} className='absolute left-1/2 bottom-[4.2rem]' src="/image/about.png" alt="" />
            </div>
            <img className='absolute top-0 left-0 animate-moveSky1' src="/image/sky1.png" alt="" />
            <img className='absolute top-0 right-0 animate-moveSky2' src="/image/sky2.png" alt="" />
            <img onClick={handleBurgerClick} className='absolute top-24 left-3 z-20' src="/image/burger.png" alt="" />
            <div
                style={{ transform: 'translateX(-50%)' }}
                className='absolute left-1/2 w-full bottom-[4.5rem]'
            >
                <m.form
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={heading} 
                    onSubmit={handleSubmit(onSubmit)} 
                    className='px-16'>
                    <m.div variants={headingLines} className='relative w-full mb-2'>
                        <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/calendar.png" alt="" />
                        <input style={errors.zaezd && { borderColor: 'red' }} {...register("zaezd", { required: true })} id='zaezd' placeholder='ЗАЕЗД' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
                    </m.div>
                    <m.div variants={headingLines} className='relative w-full mb-2'>
                        <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/calendar.png" alt="" />
                        <input style={errors.viezd && { borderColor: 'red' }} {...register("viezd", { required: true })} id='viezd' placeholder='ВЫЕЗД' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
                    </m.div>
                    <m.div variants={headingLines} className='relative w-full mb-2'>
                        <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/persone.png" alt="" />
                        <input style={errors.people && { borderColor: 'red' }} {...register("people", { required: true })} placeholder='КОЛИЧЕСТВО ЧЕЛОВЕК' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
                    </m.div>
                    <m.button variants={headingLines} type='submit' className='w-full rounded-[30px] border border-black bg-[#0CF259] bg-opacity-50 shadow-md monterey text-white font-semibold text-lg h-9'>
                        Посмотреть
                    </m.button>
                </m.form>
            </div>
        </section>
    );
}

export default Welcome;
